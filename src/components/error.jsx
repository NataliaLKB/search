var React = require("react");

var error = React.createClass({ 
    render: function() {
        return (
            <p className="error">{ this.props.message }</p>
        );
    }

});

module.exports = error;
