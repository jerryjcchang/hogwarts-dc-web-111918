import React, { Component }  from 'react'

class FilterBar extends Component {

  render(){
    return(
      <div className="ui two column container filter-bar">
        <h4>Greased/Not Greased</h4>
        <div className="ui fluid selection">
          <select name="greased-filter" id="greased-filter" onChange={this.props.onGreaseFilter}>
            <option value="all">Show All</option>
            <option value="true">Greased</option>
            <option value="false">Not Greased</option>
          </select>
        </div>
        <h4>Sort By:</h4>
        <div className="ui fluid selection">
          <select name="sort-filter" id="sort-filter" onChange={this.props.onSortFilter}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>
    )
  }

}

export default FilterBar
