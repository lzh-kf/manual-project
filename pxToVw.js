module.exports = function (source) {
    if (source) {
        const defaultOptions = {
            unitToConvert: 'px',
            viewportWidth: 750,
            unitPrecision: 4,
            viewportUnit: 'vw',
        }
        const options = { ...defaultOptions, ...this.getOptions() }
        const reg = /\d{0,9}px/g
        const values = (source.match(reg))
        if (values) {
            values.forEach(item => {
                const [val] = item.split(options.unitToConvert)
                const transformValue = (val / options.viewportWidth * 100).toFixed(options.unitPrecision)
                source = source.replace(item, `${transformValue}${options.viewportUnit}`)
            })
        }
        return source
    }
}