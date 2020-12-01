import './App.css';
import MenuList from './Components/MenuList';
import Content from './Components/Content';
import logo from './logo.png';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { yellow } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  ml2: {
    marginLeft: theme.spacing(2),
  },
  pa2: {
    padding: theme.spacing(2),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  yellow: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[400],
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={2}>
          <img src={logo} alt='Applied AI Courses' className={classes.ml2} />
          <MenuList />
        </Grid>
        <Grid item lg={10}>
          <AppBar position='static' color='white'>
            <Toolbar>
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' className={classes.title}></Typography>
              <Avatar className={classes.yellow}>M</Avatar>
              <span className={classes.pa2}>Badam Manisrinivasa Narayana</span>
              <IconButton edge='start' color='inherit' aria-label='menu'>
                <ArrowDropDownIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Content />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
