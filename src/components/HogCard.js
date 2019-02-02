import React, { Component} from 'react'

let medalKey ='highest medal achieved'
let weightKey ='weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class HogCard extends Component {

  constructor(){
    super()
    this.state = {
      showDetails: false
    }
  }

  handleClickHogCard = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
    // console.log("clicking card")
  }

  // hogImageName(){
  //   return
  // }

  parseHogImageURL(){
    let hogName = this.props.hog.name
    let downcaseHogName = hogName.toLowerCase()
    let splitHog = downcaseHogName.split(" ")
    let underlineHog = splitHog.join("_")
    return underlineHog
  }

  render(){
    console.log(this)
    return (

      <div  className="ui fluid raised link card" 
            onMouseDown={this.handleClickHogCard}
            onMouseUp={this.handleClickHogCard}>
        <div className="hog-card content">
         
          <div className="header">{this.props.hog.name}</div>
          {!this.state.showDetails ? 
            <div className="image hog-image">
              <img src={require(`../hog-imgs/${this.parseHogImageURL()}.jpg`)}></img>
            </div> :
          <div className="description">
            <p>Specialty: {this.props.hog.specialty}</p>
            <p>Greased: {this.props.hog.greased ? "You Betcha!" : "This Hog Need Some Greasin'"}</p>
            <p>Weight: {this.props.hog[weightKey]}</p>
            <p>Medal: {this.props.hog[medalKey]}</p>
          </div>} 
        </div>
      </div>
    )
  }

}

export default HogCard
