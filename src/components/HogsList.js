import React, { Component } from 'react'
import HogCard from './HogCard'
import hogs from '../porkers_data';


class HogsList extends Component {

  sortHogsList = () =>{
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    let sortedHogs;
    if(this.props.sortFilter === "name"){
      sortedHogs= hogs.sort((hogA,hogB) => (hogA.name < hogB.name ? -1 : 1))
      } else if(this.props.sortFilter === "weight"){
      sortedHogs= hogs.sort((hogA,hogB) => (hogA[weight] > hogB[weight] ? -1 : 1))
      }
    // let x = sortedHogs
    // debugger

    let hogsArray
    // if(this.props.greaseFilter === "true"){
    //   hogsArray = sortedHogs.filter(hog => hog.greased === true)
    //   console.log('showing greased hogs')
    // } else if(this.props.greaseFilter === "false"){
    //   hogsArray = sortedHogs.filter(hog => hog.greased === false)
    //   console.log('showing ungreased hogs')
    // } else if(this.props.greaseFilter === "all"){
    //   hogsArray = sortedHogs
    //   console.log('showing all hogs')
    // }
    switch(this.props.greaseFilter){
      case "true":
        hogsArray = sortedHogs.filter(hog => hog.greased === true)
        break
      case "false":
        hogsArray = sortedHogs.filter(hog => hog.greased === false)
        break
      default:
        hogsArray = sortedHogs
    }
    return hogsArray
  }

  render(){
    return(
      <div
        className="ui cards three column grid container"
        >
        {this.sortHogsList().map(hogObj => <HogCard
          hog={hogObj}
          key={hogObj.name}
          />)}
      </div>
    )
  }

}

export default HogsList
