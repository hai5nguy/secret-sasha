const fs = require('fs')

const GIFTERS_JSON = './data/gifters.json'
const GIFTER_NAMES = ['Mom', 'Dad', 'Shannon', 'Hai', 'Diem', 'Adam', 'Kieu', 'Paul', 'Thu', 'Derik', 'The Rat']

const init = (callback) => {
    fs.stat(GIFTERS_JSON, (err) => {
        if (err) {
            reset().then(callback, () => {
                console.log('Init FAILED')
            })
        } else {
            callback()
        }
    })
}

const generateGifters = () => {
    let available = [...GIFTER_NAMES]
    return GIFTER_NAMES.map((name) => {
        const pickList = available.filter(a => a !== name)
        const secretSanta = pickList[Math.floor(Math.random() * pickList.length)]
        available = available.filter(a => a !== secretSanta)
        return {
            name,
            open: false,
            secretSanta,
        }
    })
}

const getGifters = () => new Promise((resolve, reject) => {
    fs.readFile(GIFTERS_JSON, 'utf8', (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(JSON.parse(data))
        }
    })
})


const setGifters = gifters => new Promise((resolve, reject) => {
    fs.writeFile(GIFTERS_JSON, JSON.stringify(gifters), 'utf8', (err) => {
        if (err) {
            reject()
        } else {
            resolve()
        }
    })
})

const reset = () => {
    const gifters = generateGifters()
    return setGifters(gifters)
}

module.exports = { init, getGifters, setGifters, reset }
