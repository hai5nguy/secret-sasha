const fs = require('fs')

fs.stat('./gifters.json', (err, stats) => {
    console.log('err', err)
    if (err) {
        createFile()
    } else {
        console.log('file exists')
    }
    console.log('stats', stats)
})

const createFile = () => {
    const blah = { name: 'yo name', open: false }
    const gifters = ['Mom', 'Dad', 'Shannon', 'Hai', '']
    fs.writeFile('./gifters.json', JSON.stringify(blah), 'utf8', (err) => {
        if (err) {
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!')
            console.log('UNABLE TO WRITE JSON FILE')
        } else {
            console.log('Successfully created gifters.json file')
        }
    })
}
