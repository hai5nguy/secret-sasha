import React from 'react'
import { withStyles, Button, Typography, DialogContent } from '@material-ui/core'
import { Error } from '@material-ui/icons'

import closeDialog from 'actions/close-dialog'

const styles = {
    dialog_content: {
        padding: 10,
        maxWidth: 350,
        textAlign: 'center',
    },
    error_icon: {
        fontSize: '4rem',
    },
    someone_has: {
        margin: '20px 0 30px 0',
    },
    button: {
        width: '75%',
        minHeight: 70,
        fontSize: '1.2rem',
    },
};

class AlreadyViewed extends React.Component {
    close = () => {
        closeDialog()
    }

    render() {
        const { classes: c } = this.props
        return (
            <DialogContent className={c.dialog_content}>
                <Error className={c.error_icon} color="primary" />
                <Typography className={c.someone_has} variant="h6" color="primary">SOMEONE HAS ALREADY VIEWED THIS CARD.  SASHA WILL HUNT THEM DOWN.</Typography>
                <Button className={c.button} variant="contained" color="secondary" onClick={this.close}>Ok</Button>
            </DialogContent>
        )
    }
}

export default withStyles(styles)(AlreadyViewed)
