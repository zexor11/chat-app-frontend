import { AppBar, Toolbar, styled, Typography, Box, Avatar} from '@mui/material'
import { Mail, Notifications} from "@mui/icons-material"
import React from 'react'
import wallpaper from "./wallpaperflare.com_wallpaper (3).jpg";

const Navbar = () => {
  return (
    
    <AppBar position='sticky' sx={{backgroundColor:"green"}}>
      <StyledToolbar>
        <Typography variant='h6'  >Chat App</Typography>
        
        <Icon>
        <Notifications />
        <Mail />
        <Avatar src={wallpaper} sx={{width: '30px', height:"30px"}} />
        </Icon>
      </StyledToolbar>
      
    </AppBar>
  )
}

const Icon = styled(Box)(({theme})=> ({
  display: "flex",
  gap: "15px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));





const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',


})
export default Navbar
