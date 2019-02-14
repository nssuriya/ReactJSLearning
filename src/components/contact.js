import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return <div>THIS IS CONTACT PAGE</div>;
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
// export default withStyles(styles)(ButtonAppBar);
