import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
  removeLike,
  addLike,
  auth,
  deletePost,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div class="post bg-white my-1 p-1">
    <div>
      <Link to={`/profile/${user}`}>
        <img class="round-img" src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </div>

    <div>
      <p class="my-1">{text}</p>
      <p className="post-date">
        Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
      </p>

      {showActions && (
        <Fragment>
          <button onClick={e => addLike(_id)} class="btn">
            <i class="fas fa-thumbs-up" />{" "}
            {likes.length > 0 && <span>{likes.length}</span>}
          </button>
          <button onClick={e => removeLike(_id)} class="btn">
            <i class="fas fa-thumbs-down" />
          </button>
          <Link to={`/posts/${_id}`} class="btn btn-primary">
            Discussion{" "}
            {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={e => deletePost(_id)}
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-times" />
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
