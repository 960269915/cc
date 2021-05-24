var aes = require("./aes")
var ENC = require("./enc")
var superagent = require("superagent")
var cheerio = require("cheerio")
var child_process = require('child_process')
var fs = require('fs')
var async = require('async')
var path = require("path")
const { time } = require("console")
var catalogs = require("./catalogs.json")
const { format } = require("path")

function Agent() {
    this.agent = superagent.agent()
}
Agent.prototype = {
    constructor: Agent,
    loginUrl: "http://shizhijiaoyu.net/Services/CommonService.svc/UserLoginEnc",
    host: "shizhijiaoyu.net",
    origin: "http://shizhijiaoyu.net",
    Referer: "http://shizhijiaoyu.net/login.htm",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
    "X-Tingyun-Id": "_hoVbWfXnGI;r=519352593",
    Cookie: "ELEARNING_00999=vl144xcgnmyf4jfaj13zwaml; ELEARNING_00008=b7909e91-e665-40f8-8e53-d9362b4e0f92; COOKIE_LANGAGES=zh; route=465c19908a96759246326fd47ec5da50; TY_SESSION_ID=4bb055d3-9bc8-499d-9b73-b591b4b94293; ELEARNING_00002=13601072351; ELEARNING_00017=882e6ddc-2340-4638-a5b7-460e043778f6; loginType=Pwd; XXTOWN_COOKIE_00018=f0fc2905-bc80-4a01-9573-3e5050ce095b; ELEARNING_00003=StudyMenuGroup; .ASPXAUTH=14634E210560D454487C5602F95EAA4E785DCBBBED2660338EAB1FD867978B259F4A40931086A0E3CACEDBD5C25D798E7126C042A5AF351D0F08930489782FA443E2C80859014DAA5E8D6AED022BD70F227E41D2F3457628E45521A0BFBB0A13BF9B81FD9A5BBB4609C8A76D500CEF657DD81A228868653578C06D810E8BE226D25ECC1C22EC228C4FC0CD5E; ELEARNING_00006=F4791F96E6E5700642306AD442BD5F8A06B43A1A6E3460783D7F534A28C58B9AB35C09D2774089E1127D8BB9124915AED071210900DF30D59F182CBB3A82A37A34EA45E24758C0019A13C9E0F2207BEBB2663CCAAE4EE911F3E907C3E395642266F8FE9C81D47EE41BC92B2AAE9766951BB971C4BA7AD303BC3F1438B89D932A2B74E755E6B9911DBF63612A3EE7D366CDEDDA7426DB6F611C50A7871364CB8012B7E52B6AD9A97E51E445C48EA6816339A924BC69440739337A31F9",
    "Content-Type": "applicatioapplication/json;charset=UTF-8",
    agent: null,
    start: function() {
        this.agent.get("http://shizhijiaoyu.net/login.htm")
            .on("error", e => {
                console.error(e)
            })
            .end((err, res) => {
                if (err) {
                    console.error("请求登录页错误", err)
                    return
                }
                if (res.status == 200) {
                    console.log("进入登录页，可进行登录")
                    this.login("13601072351", "123456")
                }
            })
    },
    checkLogin: function() {

    },
    login: function(username, password) {
        this.agent.post(this.loginUrl)
            .set("Content-Type", "text/json")
            .set("Referer", this.Referer)
            .set("Host", this.host)
            .set("Origin", this.origin)
            .set("User-Agent", this["User-Agent"])
            .send({ "fromUrl": "", "isAutoLogin": false, "password": ENC.GetEnc(password) + "", "userName": ENC.GetEnc(username) + "", "validateCode": "" })
            .on("error", e => {
                console.error(e)
            })
            .end((err, res) => {
                if (err) {
                    console.error("登录错误", err)
                    return
                }
                if (res.status == 200) {
                    console.log(res.headers)
                    this.index()
                }
            })
    },
    index: function() {
        this.agent.get("http://shizhijiaoyu.net/shizhijiaoyuhome.htm")
            .on("error", e => {
                console.error(e)
            })
            .end((err, res) => {
                if (err) {
                    console.error("请求首页错误", err)
                    return
                }
                if (res.status == 200) {
                    let $ = cheerio.load(res.text, {
                            decodeEntities: false
                        })
                        // let menus = $("ul.category-ml3")
                        // console.log("获取到菜单根节点", menus.html())
                    console.log("成功进入首页，加载视频列表")
                    var catalog = words[CurrentCatalog]
                    this.getPath(catalog, catalog.catalogName)
                }
            })
    },
    getPath(catalog, path) {
        if (catalog.chirlds && catalog.chirlds.length > 1) {
            for (let i = 0; i < catalog.chirlds.length; i++) {
                let e = catalog.chirlds[i];
                this.getPath(e, path + "/" + e.catalogName)
            }
        } else {
            this.catalogs(catalog, 1, path)
        }
    },
    catalogs: function(catalog, index, path) {
        var url = "http://shizhijiaoyu.net/kng/knowledgecatalogsearch.htm"
        url += "?id=" + catalog.id + "&rn=" + catalog.catalogRoutingNumber + "&h=menu&s=dc&mode=1&pi=" + index
        this.agent.get(url)
            .on("error", e => {
                console.error(e)
            })
            .end((err, res) => {
                if (err) {
                    console.error("请求清单页错误", err)
                    return
                }
                if (res.status == 200) {
                    let $ = cheerio.load(res.text, {
                        decodeEntities: false
                    })
                    let li = $("ul.el-kng-img-list").find("li")
                    li && li.each((a, b) => {
                        var imgSrc = $(b).find("img").attr("onclick")
                        var title = $(b).find(".text-normal").html()
                        this.doVideo(this.origin + imgSrc.substring(imgSrc.indexOf("'") + 1, imgSrc.lastIndexOf("'")), title, path)
                    })
                    let hasNext = $(".pageinfo").find("span.current").next().is("a")
                    if (hasNext) {
                        console.log("拥有下级，继续分页查找")
                        this.catalogs(catalog, index + 1, path)
                    }
                }
            })
    },
    doVideo(src, title, path) {
        this.agent.get(src)
            .on("error", e => {
                console.error(e)
            })
            .end((err, res) => {
                if (err) {
                    console.error("请求视频页错误", err)
                    return
                }
                if (res.status == 200) {
                    let $ = cheerio.load(res.text, {
                        decodeEntities: false
                    })
                    var tokenLeft = res.text.substring(res.text.indexOf("aliyun--cluster--"), res.text.length - 1)
                    var token = tokenLeft.substring(0, tokenLeft.indexOf("'"))
                    console.log("当前用户token", token)
                    var sjson = res.text.substring(res.text.indexOf(`'{"isNewModel`) + 1, res.text.indexOf(`吕总"}}'`) + 5)
                    try {
                        var json = JSON.parse(sjson)
                        var vi = json.newPlayListItem.videoItems
                        for (let i = 0; i < vi.length; i++) {
                            this.validVideoToken(vi[i], title, path)
                        }
                    } catch (error) {
                        console.log(src, sjson, error)
                    }
                }
            })
    },
    getEncryptKey(token, vi, title, path) {
        var src = "https://drm.media.baidubce.com/v1/tokenVideoKey?videoKeyId=" + vi.videoKeyId + "&playerId=pid-1-5-1&token=" + token
        this.agent.get(src)
            .on("error", e => {
                console.error(e)
            })
            .end((err, res) => {
                if (err) {
                    console.error("请求获取秘钥错误", err)
                    return
                }
                if (res.status == 200) {
                    let body = JSON.parse(res.text)
                    let aesSrc = aes.decrypt(body.encryptedVideoKey)
                    console.log("视频地址:", vi.fileFullUrl, "码率：", vi.resolution, "解析后秘钥：", aesSrc, "存储路径", path, "/", title)
                    this.downloadM3u8(vi.fileFullUrl, title, vi.resolution, path, aesSrc)
                }
            })
    },
    validVideoToken(vi, title, path) {
        var videoTokenUrl = `http://api-component.yxt.com/v1/authex/bce/valid?f=${vi.fileFullUrl}&m=${vi.videoKeyId}&e=${new Date().getTime()}&k=abc`
        this.agent.get(videoTokenUrl)
            .on("error", e => {
                console.error(e)
            })
            .end((err, res) => {
                if (err) {
                    console.error("请求获取视频Token错误", err)
                    return
                }
                if (res.status == 200) {
                    let body = JSON.parse(res.text)
                    this.getEncryptKey(body.token, vi, title, path)
                }
            })
    },
    downloadM3u8(url, title, resolution, path, key) {
        var self = this
        var keyname = `./mp4/${path}/${title}/${resolution}/${resolution}.key`
            // if (fs.existsSync(`./mp4/${path}/${title}/${resolution}`)) {
            //     return
            // }
        var mp4name = `./mp4/${path}/${title}/${resolution}/${title}.mp4`
        writeFileRecursive(keyname, key, (err) => {
            if (err) {
                console.error(err)
            } else {
                //开始下载m3u8主文件
                let m3u8Src = `./mp4/${path}/${title}/${resolution}/${resolution}.m3u8`
                let stream = fs.createWriteStream(m3u8Src);
                self.agent.get(url).pipe(stream)
                    .on("close", function(err) {
                        if (err) {
                            console.error("下载m3u8错误", err)
                        } else {
                            console.log("下载成功，修改后调用ffmpeg4下载")
                            updateM3u8Key(m3u8Src, `${resolution}.key`, mp4name, url)
                        }
                    })
            }
        });
    },
}

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}

function doSpawn(sh, ...params) {
    var common = child_process.spawn(sh, params)
    common.stdout.on('data', function(data) {
        console.log('standard output:\n' + data);
    });
    // 捕获标准错误输出并将其打印到控制台 
    common.stderr.on('data', function(data) {
        console.log('standard error output:\n' + data);
    });
}

function doExec(sh) {
    let resu = false
    child_process.exec(sh, function(err, stdout, stderr) {
        if (err) {
            console.log('do exec error:' + stderr);
            resu = false
        } else {
            console.log(stdout)
            resu = true
        }
    })
    return resu
}
/**
 *生成多层目录
 * @param dir 多层目录
 * @param split 分隔符，ex:'/' 对应的目录地址:'2015/10/10'
 * @param mode 目录权限（读写权限），默认0777
 * @param callback
 */
var createDirsSync = function(dir, split, mode, callback) {
    console.log("创建目录：" + dir);
    if (!fs.existsSync(dir)) {
        var dirArr = dir.split(split);
        var pathtmp;
        async.forEach(dirArr, function(item, cb) {
            if (pathtmp) {
                pathtmp = path.join(pathtmp, item);
            } else {
                pathtmp = item;
            }
            if (!fs.existsSync(pathtmp)) {
                if (!fs.mkdirSync(pathtmp, mode)) {
                    callback(null, item);
                } else {}
            }
        }, function(err) {
            callback(err);
        })
    } else {
        callback(null);
    }
}

function updateM3u8Key(fileName, keyName, mp4name, urlPath) {
    fs.readFile(fileName, 'utf8', function(err, data) {
        if (err) {
            return console.error(err)
        }
        var u = data.match(/URI="(\S*?)",IV/)[1]
        u = u.replace(/\?/g, "\\?")
        var result = data.replace(new RegExp(u, "g"), keyName)
        u = urlPath.substring(urlPath.lastIndexOf("/") + 1, urlPath.length)
        result = result.replace(new RegExp(u, "g"), urlPath)
        return fs.writeFile(fileName, result, 'utf8', function(err) {
            if (err) {
                return console.error(err)
            }
            console.log("转换完成等待下载")
                // doExec(`ffmpeg -allowed_extensions ALL -protocol_whitelist "file,http,crypto,tcp,https,tls" -i ${fileName} -c copy ${mp4name}`)
        })
    })
}

function writeFileRecursive(path, buffer, callback) {
    let lastPath = path.substring(0, path.lastIndexOf("/"));
    fs.mkdir(lastPath, { recursive: true }, (err) => {
        if (err) return callback(err);
        fs.writeFile(path, buffer, function(err) {
            if (err) return callback(err);
            return callback(null);
        });
    });
}

function getJishu(o) {
    for (const ca of catalogs.data) {
        if (ca.parentId == o.id) {
            var oc = o.chirlds[o.chirlds.push(ca) - 1]
            getJishu(oc)
        }
    }
}

const glxy = "70cb4356-b245-495a-9d73-909f0365b2d9",
    jsxy = "ccf93e38-6ed7-4bdc-811c-6357b114474a",
    zyzg = "b4636a98-df7d-42ce-8f43-084784744a79",
    zyxy = "10c90b8d-9dd6-4c88-a64c-6ac13e165ec4",
    zysy = "815ad882-ca5c-429e-8ae6-fcc430944246",
    yqfh = "cfb6e0b4-e0e1-4e50-96e4-175cb30acd78",
    tjxx = "35ea5b5b-63e3-4eab-b966-061a49fbb897",
    rcfzlt = "b66128a9-5605-4727-8c5b-2ff7e80c4dcd"
var CurrentCatalog = jsxy
var words = {}

function makeWord() {
    for (const ca of catalogs.data) {
        words[ca.id] = ca
        words[ca.id].chirlds = []
    }
    getJishu(words[CurrentCatalog])
    return words[CurrentCatalog]
}
makeWord()
var a = new Agent()
a.start()