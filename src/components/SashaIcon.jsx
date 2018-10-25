import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = {
    root: {
        width: '3rem',
        margin: 'auto',
    },
}

const SashaIcon = ({ classes }) => <img className={classes.root} src="sasha_icon.png" alt="sasha icon" />

export default withStyles(styles)(SashaIcon)
