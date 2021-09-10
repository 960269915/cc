// 原生router
const fs = require("fs");
const path = require("path");

function render(name) {
  return new Promise((resolve, reject) => {
    const paths = `${path.resolve()}/router/view/${name}`
    fs.readFile(paths, "binary", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

async function router(url) {
  let view = "404.html";
  switch (url) {
    case "/":
      view = "index.html"
      break;

    case "/login":
      view = "login.html"
      break;
  }
  let html = await render(view)
  return html;
}

module.exports = router;