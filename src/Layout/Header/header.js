import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import {Link} from 'react-router-dom';
import {grey} from '@material-ui/core/colors';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    color:"white",
   
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  label:{
    paddingLeft:'15px',
    color:'white',
  },
  divider:{
    color:'white',
  },
  hide: {
    display: 'none',
  },
  sidenav:{
   fontSize:'1.92rem',
   marginRight: '100px',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor:grey[900],
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:grey[900],
  },
  drawerHead: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    height: '12vh',
    backgroundColor: '#14a31a',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export const Header = () =>  {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        style={{backgroundColor:"black"}}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap  className={classes.title}>
            i-Play
          </Typography>
          <Button  color="inherit" component={Link} to='/Zone/Wallet'><AccountBalanceWalletIcon/></Button>
          <Button color="inherit" component={Link} to='/News'><NotificationsActiveIcon/></Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHead}>
        <img src="https://app.alvoraplay.com/assets/subgraphic-desktop-footer-left.png"alt="/" className={classes.img}></img>
          <h3 className={classes.sidenav}>iPlay</h3>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={{color:"white"}} /> : <ChevronRightIcon  style={{color:"white"}}/>}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem  button component={Link} to='/Home/Games'>
              <ListItemIcon ><SportsEsportsIcon style={{color:"#1edc26"}}/></ListItemIcon>
              <ListItemText>Games</ListItemText>
            </ListItem>
            <ListItem button component={Link} to='/Zone'>
              <ListItemIcon><SettingsIcon style={{color:"#1edc26"}}/></ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </ListItem>
        </List>
        <Divider className={classes.divider}/>
        <Typography className={classes.label}>Support</Typography>
        <List>
            <ListItem  button component={Link} to='/Home/Games'>
              <ListItemIcon ><SettingsIcon style={{color:"#1edc26"}}/></ListItemIcon>
              <ListItemText>Support</ListItemText>
            </ListItem>
            <ListItem button component={Link} to='/Zone'>
              <ListItemIcon><SettingsIcon style={{color:"#1edc26"}}/></ListItemIcon>
              <ListItemText>Developers</ListItemText>
            </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        </main>
 </div>
  );
}