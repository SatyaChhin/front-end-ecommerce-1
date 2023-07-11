import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});


export default function Item(props) {

  return (
        <div className='MyCard'>
            <Card sx={{ maxWidth: 300 }}>
            <CardMedia
            sx={{ height: 250 }}
            image= {props.image}
            title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.code}
            </Typography>
            <Typography component="legend">
            <Button style={{fontWeight:'bold' , fontSize : 20}}   size="small">
                {props.price} $
            </Button> 
            </Typography>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
                >
                <StyledRating
                    name="customized-color"
                    defaultValue={2}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
            </Box>
            <Typography variant="body2" color="text.secondary">
               <p  className='titleP'> {props.title}
                species ranging across all continents except Antarctica</p>
            </Typography>
            </CardContent>
            </Card>
        </div>
  )
}
