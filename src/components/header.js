import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Login from "./login";

const styles = {
  appBar: {
    marginLeft: 240,
    width: `calc(100% - 240px)`,
    flexGrow: 1
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = value => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.appBar}>
              {this.props.headerList}
            </Typography>
            <Button color="inherit" onClick={this.handleClickOpen}>
              Login
            </Button>
            <Login
              open={this.state.open}
              onClose={this.handleClose}
              login={this.props.login}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
// export default withStyles(styles)(ButtonAppBar);
