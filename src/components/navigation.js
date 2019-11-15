import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'



// export default () => (
//   <nav role="navigation">
//     <ul className={styles.navigation}>
//       <li className={styles.navigationItem}>
//         <Link to="/">Home</Link>
//       </li>
//       <li className={styles.navigationItem}>
//         <Link to="/blog/">Blog</Link>
//       </li>
//     </ul>
//   </nav>
// )

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 0,
  },
  title: {
    flexGrow: 1,
  },
  imageIcon: {
    width: '50px'
  },
  iconRoot: {
    textAlign: 'center'
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <a href="https://www.chick-fil-a.com" class="icon-logo-desktop logo"><span>Chick-Fil-A</span></a>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
