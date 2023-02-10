import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

export default function ProductTile({ product, addValueToCart }) {
    const { name, short_description, id, cost } = product;
    return (
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`https://picsum.photos/200/300?random=${id}`}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            $ {cost}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {short_description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" onClick={()=>addValueToCart(cost)} color="primary">
                        Add To Cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}