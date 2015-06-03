var React = require("react");

var post = React.createClass({	
	render: function() {
		return (
			<div className="post column-4">
				<a href={ this.props.post.webUrl }>
					<h5>{ this.props.post.webTitle.substring(0, 30) } ...</h5>
				</a>
			</div>
		);
	}
});

module.exports = post;