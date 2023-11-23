import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'

function Example(props)
{
    return (
        <Card style={{border: "none", boxShadow: "none"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.item.image}
            alt="green iguana"
            className="rounded-3xl"
            sx={{maxHeight: '40rem'}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

)
}

export default Example;

