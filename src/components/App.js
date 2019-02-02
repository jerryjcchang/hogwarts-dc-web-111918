import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import FilterBar from './FilterBar'
import HogsList from './HogsList'

class App extends Component {

  constructor() {
    super()
    this.state = {
      sort: "name",
      greased: "all"
    }
  }

    handleGreaseFilter = (e) => {
      this.setState({
        greased: e.target.value
      })
    }

    handleSortFilter = (e) => {
      this.setState({
        sort: e.target.value
      })
    }

  render() {
    return (
      <div className="App">
          <Nav />
          <FilterBar
            onGreaseFilter={this.handleGreaseFilter}
            onSortFilter={this.handleSortFilter}
            />
          <HogsList
            greaseFilter={this.state.greased}
            sortFilter={this.state.sort}
            />
      </div>
    )
  }

}

export default App;
