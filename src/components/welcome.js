import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./home";
import AboutUs from "./aboutUs";
import Contact from "./contact";
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
  clickfn = (path) => {
    alert("Done!!!");
    this.props.history.push(path)
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.margin}>
        <Router>
          <div onClick={this.clickfn('/contact')}>
             Surya
            <Route path="/home" component={Home} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Welcome);
// export default withStyles(styles)(ButtonAppBar);
