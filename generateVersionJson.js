let { version, name } = require("./project.json")
const path = require("path")
const fs = require("fs")
const content = `{
    "name":"${name}",
    "version":${++version}
}`
fs.writeFile(
  path.resolve(__dirname, "docs/version.json"),
  content,
  {},
  (err) => {
    if (!err) {
      console.log("版本信息已经写入成功--->当前版本", version)
      fs.writeFile(
        path.resolve(__dirname, "project.json"),
        content,
        {},
        (error) => {
          if (!error) {
            console.log("已经更新原始配置文件--->当前版本", version)
          }
        }
      )
    } else {
      console.log('文件写入失败', err)
    }
  }
)
