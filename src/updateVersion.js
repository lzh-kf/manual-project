import axios from "axios"
let isFirstLoad = true
let currentVersion
const managementVersion = () => {
  const url = process.env.NODE_ENV === 'preview' ? '/version.json' : '/manual-project/version.json'
  axios(url, {
    headers: {
      "Cache-Control": "no-cache",
    },
  }).then((res) => {
    const { version } = res.data
    if (isFirstLoad) {
      isFirstLoad = false
      currentVersion = version
    } else {
      if (currentVersion !== version) {
        ElMessageBox.confirm("发现新版本，是否更新?", {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          type: "更新版本确认框？",
        })
          .then(() => {
            ElMessage({
              type: "success",
              message: "更新新版本了!!!",
              onClose () {
                location.reload()
              },
            })
          })
          .catch(() => {
            ElMessage({
              type: "info",
              message: "你取消了版本更新",
            })
          })
      }
    }
  })
}
if (process.env.NODE_ENV !== "development") {
  setInterval(() => {
    managementVersion()
  }, 1000 * 60 * 30)
}
