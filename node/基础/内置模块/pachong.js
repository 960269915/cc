const https = require("https");
const http = require("http");
const cheerio = require("cheerio")

function filterData(data) {
  const $ = cheerio.load(data);
  $(".meizu-header-link li").each((index, item) => {
    console.log($(item).find("a").text());
  });
}

let ht = http.createServer((req, res) => {
  let data = "";
  https.get("https://www.meizu.com", (result) => {
    result.on("data", (chunk) => {
      data += chunk
    })
    result.on("end", () => {
      filterData(data)
    })
  })
  res.end()
})

ht.listen("8080")