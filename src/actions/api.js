// import Store from 'Store';

export const send = async (query) => {
    try {
        const response = await fetch(process.env.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        if (response.status !== 200) {
            return { error: 'NETWORK_ERROR', data: null }
        }

        const { data, errors } = await response.json()
        if (errors) {
            return { error: errors, data: null }
        }
        return { error: null, data }
    } catch (error) {
        return { error, data: null }
    }
};
