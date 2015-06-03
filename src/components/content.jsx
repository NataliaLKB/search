var React = require("react");
var Post = require("./post.jsx");

var content = React.createClass({	
	render: function() {
		console.log(this.props.posts, this.props.posts.length);
		return (
			<div className="content-container column-12 push-2">
				<div className="row space">
					{ this.props.posts.map(function(post){
					    return <Post post={post}/>;
					})}
				</div>
			</div>
		);
	}

});

module.exports = content;