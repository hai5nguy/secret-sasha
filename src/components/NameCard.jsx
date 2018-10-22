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
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

const NameCard = (props) => {
    const { classes, name } = props;
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                <Typography component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(NameCard);
