import React , { useState , useEffect }   from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import SkeletonPage from '../../component/skeleton/SkeletonPage';

export default function CategoryPage() {
    
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
    const [post, setPosts] = useState([]);
    const [ loading , setLoading ] = useState(true)
    useEffect(() => {
        axios.get('https://picsum.photos/v2/list')
          .then(response => {
            setPosts(response.data);
            setLoading(false)
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    return (
       <>
             <Fade scale={1.4} indicators={true}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: "100%" }}>
                        <img style={{ objectFit: "cover", width: "100%" }} alt="" src={each}  />
                    </div>
                ))}
            </Fade>
            {loading ? <SkeletonPage/> : 
            <div>
                <ImageList sx={{ width: 1300, height: 450 }}>
                <ImageListItem key="Subheader" cols={1}>
                    <ListSubheader component="div">December</ListSubheader>
                </ImageListItem>
                {post.map((item) => (
                    <ImageListItem key={item.download_url}>
                    <img
                        src={`${item.download_url}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.idownload_urlmg}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}
                        >
                            <InfoIcon />
                        </IconButton>
                        }
                    />
                    </ImageListItem>
                ))}
            </ImageList>    
            </div>}
       </>
    )
}