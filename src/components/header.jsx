var React = require("react");

var Header = React.createClass({    
    render: function() {
        return (
            <header className="column-16">
                <div className="column-4 push-12">
                    <img src="./img/logo.png" />
                </div>
            </header>
        );
    }

});

module.exports = Header;
