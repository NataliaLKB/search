var React       = require("react");
var SearchError = require("./error.jsx");
var message     = "Sorry, there doesn't seem to be any posts with that search term";

var searchContainer = React.createClass({   
    render: function() {
        return (
            <div className="search-container column-8 push-4">
                <div>
                    {( this.props.searchError ?
                        <SearchError message={message} /> :
                        <p></p>
                    )}
                </div>
                <form onSubmit={ this.props.submitSearch }>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" 
                                            placeholder="search" 
                                            value={ this.props.searchTerm }
                                            onChange={ this.props.handleChange }/>
                                </td>
                                <td className="search">
                                    <input type="image" src="./img/magnifying_glass.png"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <hr />
            </div>
        );
    }

});

module.exports = searchContainer;