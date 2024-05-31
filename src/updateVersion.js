import axios from 'axios'
import { ElMessageBox,ElMessage } from 'element-plus'
let isFirstLoad = true
const versionInfo = {
    cacheValue:null,
    get value(){
        if(versionInfo.cacheValue) {
            return  versionInfo.cacheValue
        }
        versionInfo.cacheValue = localStorage.getItem('version')
        return versionInfo.cacheValue
    }
}
const managementVersion = () => {
    axios('/manual-project/dist/version.json', {
        headers:{
            'Cache-Control':'no-cache',
        }
    }).then(res=> {
        const { version } = res.data
        if(isFirstLoad) {
            isFirstLoad = false
            localStorage.setItem('version', version)
        } else {
            const localVersion = versionInfo.value
            if(localVersion!=version) {
                ElMessageBox.confirm('发现新版本，是否更新?',
                    {
                      confirmButtonText: '确认',
                      cancelButtonText: '取消',
                      type: '更新版本确认框？',
                    }
                  ).then(() => {
                      ElMessage({
                        type: 'success',
                        message: '更新新版本了!!!',
                        onClose(){
                            localStorage.setItem('version', version)
                            location.reload()
                        }
                      })
                    }).catch(() => {
                      ElMessage({
                        type: 'info',
                        message: '你取消了版本更新',
                      })
                    })
            }
        }
       })
}
if(process.env.NODE_ENV === 'production') {
    setInterval(()=> {
        managementVersion()
    }, 1000 * 10)
}