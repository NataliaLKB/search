var React = require("react");

var searchContainer = React.createClass({	
	render: function() {
		return (
			<div className="search-container column-8 push-4">
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