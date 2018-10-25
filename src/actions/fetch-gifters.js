import { dispatch } from 'store'
import { send } from './api'

export default async () => {
    const { data } = await send('query { gifters { name open }}')
    const { gifters } = data
    dispatch({ type: 'GIFTERS_SET', gifters })
}
