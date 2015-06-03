var React = require("react");

var Header = React.createClass({	
	render: function() {
		return (
			<header className="column-16">
				<div className="column-10">
					<h1>I am a header</h1>
				</div>
				<div className="column-6">
					<img src="./img/logo.png" />
				</div>
			</header>
		);
	}

});

module.exports = Header;