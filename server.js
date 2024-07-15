const express = require('express')
const app = express()
const port = 3000
app.use(express.static('docs'))
app.listen(port, () => {
    import('open').then(res => {
        res.default(` 192.168.1.101:${port}`, { app: { name: 'chrome' } })
    })
})