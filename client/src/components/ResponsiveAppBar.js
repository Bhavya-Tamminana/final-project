import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { color } from '@mui/system';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { deepPurple } from '@mui/material/colors';
import Face2Icon from '@mui/icons-material/Face2';

const pages = ['Home', 'Products', 'Workers', 'Status', 'Data'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#32a5cf',
    },
  },
});

const theme = createTheme({
  palette: {
    primary: {
      // Purple**changed
      main: '#2F0303',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  }, 
  components: {
    MuiBox: {
      defaultProps: {
        sx: {
          boxShadow: 1, // Adjust the shadow level (higher value for stronger shadow)
        },
      },
    },
  },

});




const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography 
            variant="h6"
            noWrap
            component="div" 
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            style={{ fontFamily: 'MarieQueen', color: '#d3d6db'}}
          > 
          Supply Chain Service          
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link style={{textDecoration: "none", color: "black"}} to={`/${page}`}>{page}</Link>  
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Supply Chain Service
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }} 
                style={{ fontFamily: 'MarieQueen', color: '#233b6e', fontSize: '10px'}}
              >
                <Link style={{ color: "#233b6e", textDecoration: 'none'}} to={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 ,}}>
            <Menu
              sx={{ mt: '45px', borderRadius: '90px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              borderRadius='100px'
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" style={{ fontFamily: 'MarieQueen', color: '#2F0303'}}> {setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <AccountCircle /> */}
                <Face2Icon sx={{ color: '#ffffff', fontSize: '40px'}}/>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider >
  );
};
export default ResponsiveAppBar;

