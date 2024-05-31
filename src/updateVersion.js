import axios from 'axios'
const managementVersion = () => {
    axios('/manual-project/dist/version.json', {
        'CacheControl':0,
    }).then(res=> {
        const { version } = res.data
        const localVersion = localStorage.getItem('version')
        if(localVersion) {
            if(localVersion!=version) {
                if (window.confirm("发现新版本，是否更新?")) {
                    alert('更新新版本了')
                    localStorage.setItem('version', version)
                    setTimeout(()=> {
                        window.location.reload()
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
        managementVersion()
    }, 1000 * 20)
}