import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& > *': {
      margin: theme.spacing(4),
    },
  },
}));
const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Q&A</h2>
    </div>
  );
};

export default Content;
