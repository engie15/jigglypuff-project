import React from 'react'
import {connect} from 'react-redux'
import {playSong, stopSong, showAnimation, hideAnimation} from '../actions/jiggle'
import Sound from 'react-sound'
import DancingJigglypuff from './DancingJigglypuff'


class Jigglypuff extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.play = this.play.bind(this)
    this.stop = this.stop.bind(this)
  }

  play() {
    console.log("hi")
    this.props.dispatch(playSong())
    //this.props.dispatch(showAnimation())
  }  

  stop() {
    console.log("hi 2")
    this.props.dispatch(stopSong())
    //this.props.dispatch(hideAnimation())
  } 


  render (props) {
  return (
  <div className = "space">
    {this.props.jigglepuff.playSong
        ? <div className="getting-jiggy">
            {/* <p>Play song is true</p> */}
            <Sound url='/sounds/JIGGLYPUFFSONG.mp3' playStatus={Sound.status.PLAYING} />
            <img className = 'dancing' src='/images/jigglypuff.png'/>
            <br />
            <br />
            <button className="button is-large is-dark" onClick = {this.stop}>Stop !!</button>
          </div>
        : <div className="getting-jiggy">
            {/* <p>Play song is false</p> */}
            <img className = 'notDancing' src='/images/jigglypuff.png'/>
            <br />
            <br />
            <button className="button is-large is-danger" onClick = {this.play}>Play !!</button>
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


 
