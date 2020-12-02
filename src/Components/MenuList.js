import React from 'react';
import '../App.css';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChatIcon from '@material-ui/icons/Chat';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import GroupIcon from '@material-ui/icons/Group';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& > *': {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
  },
}));

const MenuList = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  function toogleActiveStyle(index) {
    if (selectedIndex === index) {
      return 'activeColor';
    }
  }

  return (
    <Router>
      <List className={classes.root}>
        <Link
          to='/dashboard'
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            className={toogleActiveStyle(0)}
          >
            <ListItemIcon>
              <DashboardIcon className={toogleActiveStyle(0)} />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
        </Link>
        <Link
          to='/evaluation'
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            className={toogleActiveStyle(1)}
          >
            <ListItemIcon>
              <PlaylistAddCheckIcon className={toogleActiveStyle(1)} />
            </ListItemIcon>
            <ListItemText primary='Evaluation' />
          </ListItem>
        </Link>
        <Link
          to='/assignments'
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            className={toogleActiveStyle(2)}
          >
            <ListItemIcon>
              <AssignmentIcon className={toogleActiveStyle(2)} />
            </ListItemIcon>
            <ListItemText primary='Assignments' />
          </ListItem>
        </Link>
        <Link
          to='/posts'
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
            className={toogleActiveStyle(3)}
          >
            <ListItemIcon>
              <ChatIcon className={toogleActiveStyle(3)} />
            </ListItemIcon>
            <ListItemText primary='Posts' />
          </ListItem>
        </Link>
        <Link
          to='/classrooms'
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <ListItem
            button
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
            className={toogleActiveStyle(4)}
          >
            <ListItemIcon>
              <LocalLibraryIcon className={toogleActiveStyle(4)} />
            </ListItemIcon>
            <ListItemText primary='Classrooms' />
          </ListItem>
        </Link>
        <Link
          to='/asseval'
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <ListItem
            button
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
            className={toogleActiveStyle(5)}
          >
            <ListItemIcon>
              <DoneAllIcon className={toogleActiveStyle(5)} />
            </ListItemIcon>
            <ListItemText primary='Assign Evaluators' />
          </ListItem>
        </Link>
        <Link
          to='/users'
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <ListItem
            button
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}
            className={toogleActiveStyle(6)}
          >
            <ListItemIcon>
              <GroupIcon className={toogleActiveStyle(6)} />
            </ListItemIcon>
            <ListItemText primary='Users' />
          </ListItem>
        </Link>
        <Link
          to='/stdashboard'
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <ListItem
            button
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}
            className={toogleActiveStyle(7)}
          >
            <ListItemIcon>
              <ViewWeekIcon className={toogleActiveStyle(7)} />
            </ListItemIcon>
            <ListItemText primary='Student Dashboard' />
          </ListItem>
        </Link>
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <ListItem
            button
            selected={selectedIndex === 8}
            onClick={(event) => handleListItemClick(event, 8)}
            className={toogleActiveStyle(8)}
          >
            <ListItemIcon>
              <PlaylistAddCheckIcon className={toogleActiveStyle(8)} />
            </ListItemIcon>
            <ListItemText primary='Q&A' />
          </ListItem>
        </Link>
      </List>
      <Switch>
        <Route exact path='/'></Route>
        <Route path='/dashboard'></Route>
        <Route path='/evaluation'></Route>
        <Route path='/assignments'></Route>
        <Route path='/posts'></Route>
        <Route path='/classrooms'></Route>
        <Route path='/asseval'></Route>
        <Route path='/users'></Route>
        <Route path='/stdashboard'></Route>
      </Switch>
    </Router>
  );
};

export default MenuList;
