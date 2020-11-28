const { send } = require('./gmail.js')

const masterSantas = [
    {
        name: 'Ly',
        to: '5049123112@msg.fi.google.com',
    },
    {
        name: 'Ghi',
        to: '5049126954@txt.att.net',
    },
    {
        name: 'Hai',
        to: '3173004245@msg.fi.google.com',
    },
    {
        name: 'Diem',
        to: '8123251468@txt.att.net'
    },
    {
        name: 'Adam',
        to: '3179228228@txt.att.net'
    },
    {
        name: 'Kieu',
        to: '3174593255@txt.att.net'
    },
    {
        name: 'Paul',
        to: '3176961969@vtext.com'
    },
    {
        name: 'Thu',
        to: '3177241564@tmomail.net'
    },
    {
        name: 'Derik',
        to: '3175657359@tmomail.net'
    },
    {
        name: 'Michael',
        to: '5043882497@msg.fi.google.com'
    },
]


const pickOne = (names, name) => {
    const list = names.filter(n => n !== name)
    if (!list.length) {
        throw 'oh shit'
    }
    const i = Math.floor(Math.random() * Math.floor(list.length))
    return list[i]
}


const shuffle = (santas) => {
    const result = [];
    let names = santas.map(s => s.name)
    try {
        for (const s of santas) {
            const pick = pickOne(names, s.name)
            names = names.filter(n => n !== pick)

            result.push({
                ...s,
                pick
            })
        }
    } catch (e) {
        console.log('<sms.js:72> ERRRORR======================',)
        return shuffle(santas)
    }

    return result

}

const santas = shuffle(masterSantas)
// console.log('<sms.js:73> santas', santas)

// const test = 'hai'
// send({ to: '3173004245@msg.fi.google.com', subject: 'Secret Sasha', html: 'Your secret santa is: ' + test.toUpperCase() + '\n\n-Sasha (white dog)' })

for (const s of santas) {
    send({ to: s.to, subject: 'Secret Sasha', html: 'Your secret santa is: ' + s.pick.toUpperCase() + '\n\n-Sasha (white dog)' })
}