import React from 'react'
import { withStyles, Button, Typography } from '@material-ui/core'

import setUi from 'actions/set-ui'


const styles = {
    root: {
        width: '100%',
        maxWidth: 165,
        margin: 5,
        height: 84,
    },
    name: {
        color: 'white',
    },
};

class GifterCard extends React.Component {
    click = () => {
        setUi({ showDialog: true, selectedGifter: this.props.gifter.name })
    }

    render() {
        const { classes: c, gifter } = this.props
        const { name, open } = gifter
        return (
            <Button className={c.root} variant="contained" color="secondary" onClick={this.click} disabled={open}>
                <Typography className={c.name} variant="h6">{name}</Typography>
            </Button>
        )
    }
}


export default withStyles(styles)(GifterCard)
