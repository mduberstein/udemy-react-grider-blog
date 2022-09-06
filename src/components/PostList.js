import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

// null as first argument means we don't have mapStateToProps function yet,
// i.e. for now we are not passing any state to the component
// i.e. we are only passing action creators to the component via the second argument
// export default connect(null, { fetchPosts })(PostList);

// Version of Clip 269
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
