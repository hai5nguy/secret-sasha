const db = require('./db')

module.exports = {
    gifters: async () => {
        const gifters = await db.getGifters()
        gifters.map(({ name, open }) => ({ name, open }))
        return gifters
    },
    openGifter: async ({ name }) => {
        const gifters = await db.getGifters()
        let secretSanta;
        gifters.forEach((g) => {
            if (g.name === name && !g.open) {
                g.open = true
                secretSanta = g.secretSanta
            }
        });
        if (!secretSanta) {
            throw new Error('CARD_ALREADY_OPENED')
        }
        await db.setGifters(gifters)
        return secretSanta
    },
}
