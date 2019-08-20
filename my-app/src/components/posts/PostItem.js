import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "moment";
import { connect } from "react-redux";

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, commets, date }
}) => {
  return <div />;
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(PostItem);
