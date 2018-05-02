import React from 'react'
import {connect} from 'react-redux'
import {playSong, stopSong, showAnimation, hideAnimation} from '../actions/jiggle'
import Sound from 'react-sound'


class Jigglypuff extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.play = this.play.bind(this)
  }

  play() {
    console.log("hi")
    this.props.dispatch(playSong())
    this.props.dispatch(showAnimation())
  }  


  render (props) {
  return (
  <div>
    {this.props.jigglepuff.playSong
        ? <div>
            <p>Play song is true</p>
            
          </div>
        : <div>
            <p>Play song is false</p>
            <Sound url='' playStatus={Sound.status.PLAYING} />
            <button onClick = {this.play}>Play !!</button>
          </div>
    }
  </div>
  )} 
}   

const mapStateToProps = ({jigglepuff}) => {
  console.log(jigglepuff)
  return {jigglepuff}
}

export default connect(mapStateToProps)(Jigglypuff)


 
