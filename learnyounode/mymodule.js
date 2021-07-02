const fs = require('fs')

module.exports = function (path, ext, callback) {
    fs.readdir(path, (err, data) => {
        if (err) {
            return callback(err)
        }

        let filteredData = data.filter(e => {
            let doti = e.lastIndexOf('.')
            if (doti < 0) {
                return false
            }
            return ext === e.substring(doti + 1)
        })

        callback(null, filteredData)
    })
}