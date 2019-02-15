import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
  margin: {
    marginTop: 75,
    marginLeft: 250,
    width: `calc(100% - 240px)`,
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return <div className={classes.margin}>Welcome Page</div>;
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Welcome);
// export default withStyles(styles)(ButtonAppBar);
