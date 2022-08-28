import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List</div>;
  }
}

// null as first argument means we don't have mapStateToProps function yet,
// i.e. for now we are not passing any state to the component
// i.e. we are only passing action creators to the component via the second argument
export default connect(null, { fetchPosts })(PostList);
