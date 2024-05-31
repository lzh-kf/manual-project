import axios from 'axios'
const managementVersion = () => {
    axios('/version.json').then(res=> {
        const { version } = res
        const localVersion = localStorage.getItem('version')
        if(localVersion) {
            if(localVersion==version) {
                if (window.confirm("发现新版本，是否更新?")) {
                    window.location.reload()
                  } else {
                    alert('你取消了版本更新')
                  }
            }
        } else {
            localStorage.setItem('version', version)
        } 
       })
}
console.log(process.env.NODE_ENV === 'production')
if(process.env.NODE_ENV === 'production') {
    console.log('计时器开始')
    setInterval(()=> {
        managementVersion()
    },1000*60)
}