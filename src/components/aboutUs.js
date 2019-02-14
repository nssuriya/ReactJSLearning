import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return <div>THIS IS ABOUT US PAGE</div>;
  }
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutUs);
// export default withStyles(styles)(ButtonAppBar);
