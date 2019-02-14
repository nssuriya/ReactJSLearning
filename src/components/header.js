import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
   appBar: {
      marginLeft:240,
      width: `calc(100% - 240px)`,
      flexGrow: 1,
   },
   root: {
   flexGrow: 1,
   },
   menuButton: {
   marginLeft: -12,
   marginRight: 20,
   },
};

class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
     
   }
   render() {
      const { classes } = this.props;
      return (
      <div className={classes.root}>
         <AppBar position="fixed" >
            <Toolbar>
               <Typography variant="h6" color="inherit" className={classes.appBar} >
                  {this.props.headerList}
               </Typography>
            </Toolbar>
         </AppBar>
      </div>
      );
   }
}


Header.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
// export default withStyles(styles)(ButtonAppBar);
