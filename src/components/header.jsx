var React = require("react");

var Header = React.createClass({	
	render: function() {
		return (
			<header className="column-16">
				<div className="column-6 push-10">
					<img src="./img/logo.png" />
				</div>
			</header>
		);
	}

});

module.exports = Header;