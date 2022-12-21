import path from "path";
import fs from "fs";

const old = path.resolve("./") + path.join("/docs/cool-ui/assets/");

const basepath = path.resolve("./") + path.join("/docs/assets");
fs.mkdirSync(basepath);
fs.readdir(old, (err, files) => {
  files.forEach((item) => {
    fs.copyFileSync(path.join(old, "/", item), basepath + "/" + item);
    fs.rmSync(path.join(old, "/", item));
  });
  fs.rmdirSync(path.resolve("./") + path.join("/docs/cool-ui/assets"));
  fs.rmdirSync(path.resolve("./") + path.join("/docs/cool-ui"));
  console.log("执行完毕");
});
