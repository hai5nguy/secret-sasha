import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
// import classNames from 'classnames'
import { withStyles, Button, CardActionArea } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = {
    card: {
        // maxWidth: 345,
    },
    media: {
        // height: 140,
    },
};

const NameCard = (props) => {
    const { classes, name } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h2" component="h2">Mom</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default withStyles(styles)(NameCard);
