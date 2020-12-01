import React from 'react';
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
import { yellow } from '@material-ui/core/colors';

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
  activeColor: {
    color: yellow[800],
    backgroundColor: yellow[100],
  }
}));

const MenuList = () => {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.root}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PlaylistAddCheckIcon />
          </ListItemIcon>
          <ListItemText primary='Evaluation' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary='Assignments' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary='Posts' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalLibraryIcon />
          </ListItemIcon>
          <ListItemText primary='Classrooms' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DoneAllIcon />
          </ListItemIcon>
          <ListItemText primary='Assign Evaluators' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary='Users' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ViewWeekIcon />
          </ListItemIcon>
          <ListItemText primary='Student Dashboard' />
        </ListItem>
        <ListItem button className={classes.activeColor}>
          <ListItemIcon>
            <PlaylistAddCheckIcon className={classes.activeColor} />
          </ListItemIcon>
          <ListItemText primary='Q&A' />
        </ListItem>
      </List>
    </div>
  );
};

export default MenuList;
