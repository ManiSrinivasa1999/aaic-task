import React from 'react';
import PropTypes from 'prop-types';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { yellow } from '@material-ui/core/colors';
import SearchIcon from '@material-ui/icons/Search';
import {
  Button,
  InputAdornment,
  InputBase,
  TextField,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& > *': {
      margin: theme.spacing(4),
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '50%',
    margin: 'auto',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
  modalContent: {
    padding: theme.spacing(2, 4, 3),
  },
  yellow: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[400],
  },
  ma4: {
    margin: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ma2: {
    margin: theme.spacing(2),
  },
  ml2: {
    marginLeft: theme.spacing(2),
  },
  ml4: {
    marginLeft: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fullWidth: {
    width: theme.fullWidth,
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
}));

const Content = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <h2>Q&A</h2>
      <Paper color='white'>
        <Tabs value={value} onChange={handleChange} indicatorColor='primary'>
          <Tab
            style={{ color: '#f57f17' }}
            label='My Queries'
            {...a11yProps(0)}
          />
          <Tab style={{ color: '#f57f17' }} label="Faq's" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          My Queries
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </div>
          <div className={classes.ma4}>
            <div>
              <span>Filters:</span>
              <Button
                variant='outlined'
                className={classes.ml2}
                endIcon={<ArrowDropDownIcon />}
                style={{
                  borderRadius: '25px',
                }}
              >
                Categories
              </Button>
              <Button
                variant='outlined'
                className={classes.ml2}
                endIcon={<ArrowDropDownIcon />}
                style={{
                  borderRadius: '25px',
                }}
              >
                Sub Categories
              </Button>
              <Button
                variant='outlined'
                className={classes.ml2}
                endIcon={<ArrowDropDownIcon />}
                style={{
                  borderRadius: '25px',
                }}
              >
                Sub2 Categories
              </Button>
            </div>
            <div>
              <span>Sort By:</span>
              <Button
                variant='outlined'
                className={classes.ml2}
                endIcon={<ArrowDropDownIcon />}
                style={{
                  borderRadius: '25px',
                }}
              >
                Time
              </Button>
            </div>
          </div>
          <div className={classes.ml4}>
            <h3>What is the use of Linear Algebra?</h3>
            <span>
              <Button
                onClick={handleOpen}
                className={classes.ml2}
                startIcon={<ReportOutlinedIcon />}
                style={{
                  borderRadius: '25px',
                }}
              >
                Report
              </Button>
            </span>
          </div>
          <div className={classes.ml4}>
            <p>
              It is editor is based on Prosemirror, fully extendable and
              renderless. You can easily add custom nodes as Vue Components
              easily add custom nodes as components easily add custom nodes as
              Vue Components easily add custom nodes as Vue Components
            </p>
          </div>
          <div className={classes.ml4}>
            <h3>What is the use of Linear Algebra?</h3>
            <span>
              <Button
                onClick={handleOpen}
                className={classes.ml2}
                startIcon={<ReportOutlinedIcon />}
                style={{
                  borderRadius: '25px',
                }}
              >
                Report
              </Button>
            </span>
          </div>
          <div className={classes.ml4}>
            <p>
              It is editor is based on Prosemirror, fully extendable and
              renderless. You can easily add custom nodes as Vue Components
              easily add custom nodes as components easily add custom nodes as
              Vue Components easily add custom nodes as Vue Components
            </p>
          </div>
          <div className={classes.ml4}>
            <h3>What is the use of Linear Algebra?</h3>
            <span>
              <Button
                onClick={handleOpen}
                className={classes.ml2}
                startIcon={<ReportOutlinedIcon />}
                style={{
                  borderRadius: '25px',
                }}
              >
                Report
              </Button>
            </span>
          </div>
          <div className={classes.ml4}>
            <p>
              It is editor is based on Prosemirror, fully extendable and
              renderless. You can easily add custom nodes as Vue Components
              easily add custom nodes as components easily add custom nodes as
              Vue Components easily add custom nodes as Vue Components
            </p>
          </div>
        </TabPanel>
      </Paper>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{ borderRadius: '20px' }}>
            <div
              style={{
                background: '#f9a825',
                color: 'white',
                width: '100%',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                height: '60px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button
                className={classes.ml2}
                startIcon={<ReportOutlinedIcon />}
                style={{
                  color: 'white',
                }}
              >
                Report
              </Button>
              <Button
                onClick={handleClose}
                style={{
                  color: 'white',
                }}
              >
                <CloseIcon />
              </Button>
            </div>
            <div className={classes.modalContent}>
              <h3 id='transition-modal-title'>
                What is the use of Linear Algebra?
              </h3>
              <p id='transition-modal-description'>
                It is editor is based on Prosemirror, fully extendable and
                renderless. You can easily add custom nodes as Vue Components
                easily add custom nodes as components easily add custom nodes as
                Vue Components easily add custom nodes as Vue Components
              </p>
              <h3 id='transition-modal-title'>What's your changes</h3>
              <textarea style={{ width: '100%' }} rows='10'></textarea>
              <div className={classes.buttonGroup}>
                <Button
                  variant='outlined'
                  disabled
                  color='secondary'
                  className={classes.ma2}
                  style={{
                    borderRadius: '25px',
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant='contained'
                  style={{
                    color: 'white',
                    background: '#f9a825',
                    borderRadius: '25px',
                  }}
                  className={classes.ma2}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Content;
