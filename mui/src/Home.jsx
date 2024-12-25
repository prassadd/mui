import { Button, Card, CardContent, CardMedia, Grid, List, Typography,Select,MenuItem,InputLabel,IconButton ,Box} from '@mui/material';
import movie from './arr.json'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
const Home = () => {
    return(
    <>
    <AppBar position="static" >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Spreads elements
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* <NavLink to="/about"><Typography variant="body1">Home</Typography></NavLink> */}
          <Typography variant="body1">Home</Typography>
          <Typography variant="body1">Home</Typography>
          <Typography variant="body1">Home</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton style={{ color: 'orange' }}>
            <AccessAlarmIcon />
          </IconButton>
          <IconButton style={{ color: 'orange' }}>
            <AccessAlarmIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
    <Grid container spacing={2} sx={{alignItems:'center'}} >
        <Grid item xs={12} sm={6} sx={{justifyContent:'center'}}>'
            <img src='../public/ecommerce.png' width='50%'/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ color: 'red' }}>This is test</Typography>
            <Typography variant="body1">This is body1 text.</Typography>
            <Typography variant="body2">This is body2 text.</Typography>
            <Typography variant="subtitle1">This is subtitle1 text.</Typography>
            <Typography variant="subtitle2">This is subtitle2 text.</Typography>
            <Typography variant="caption">This is caption text.</Typography>
            <Typography variant="overline">This is overline text.</Typography>
        </Grid>
    </Grid>
    <List>
        <li>sasa</li>
    </List>
    <IconButton style={{ color: 'orange' }}>
        <AccessAlarmIcon />
    </IconButton>
    <IconButton style={{ color: 'orange' }}>
    <AccessAlarmIcon />
    </IconButton>
    <Grid container spacing={4}>
        {movie.map((element,index) => {
            const {name,hometown,image,birth_date,top_movies} = element;
            return (
            <Grid item md={3}>
            
            <Card  sx={{padding:'10px'}}>
                <CardMedia image={image} component="img"/>
                <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1">{hometown}</Typography>
        <Typography variant="body1">{birth_date}</Typography>
        <Button variant='contained' size="medium" style={{border:'none',outline:'none',backgroundColor:'orange',color:"white"}}
        startIcon={<AccessAlarmIcon />}
        endIcon={<AccessAlarmIcon />}>Add To Cart</Button></CardContent>
            </Card>
            </Grid>)
        })}
    </Grid>



    </>
    )
}

export default Home