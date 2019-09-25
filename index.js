const { transform } = require("@babel/core");
const fs = require("fs");

const beforeFile = "./test2/before.js";
const afterFile = "./test2/after.js";
const plugin = require("./test2/plugin.js");

const before = fs.readFileSync(beforeFile, "utf8");

const res = transform(before, {
  plugins: [plugin]
});

fs.existsSync(afterFile) && fs.unlinkSync(afterFile);
fs.writeFileSync(afterFile, res.code, "utf8");
