var React = require("react");
var Post  = require("./post.jsx");

var content = React.createClass({
    render: function() {

        var posts = this.props.posts.map(function(post){
            return <Post post={post} key={post.id}/>;
        }.bind(this));

        return (
            <div className="content-container column-12 push-2">
                <div className="row space">
                        {posts}
                </div>
            </div>
        );
    }
});

module.exports = content;