import axios from 'axios'
const managementVersion = () => {
    axios('/manual-project/dist/version.json', {
        headers:{
            'CacheControl':'no-cache',
        }
    }).then(res=> {
        const { version } = res.data
        const localVersion = localStorage.getItem('version')
        if(localVersion) {
            if(localVersion!=version) {
                if (confirm("发现新版本，是否更新?")) {
                    localStorage.setItem('version', version)
                    setTimeout(()=> {
                    alert('更新新版本了!!!')
                        location.reload()
                    },3000)
                  } else {
                    alert('你取消了版本更新')
                  }
            }
        } else {
            localStorage.setItem('version', version)
        } 
       })
}
if(process.env.NODE_ENV === 'production') {
    setInterval(()=> {
        console.log('我是最新的代码')
        managementVersion()
    }, 1000 * 5)
}