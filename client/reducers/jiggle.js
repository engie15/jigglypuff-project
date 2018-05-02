
const initialJigglepuff = {
    playSong: false,
    showAnimation: false
}

const jigglepuff = (state = initialJigglepuff, action) => {
  switch (action.type) {
    case 'PLAY_SONG':
      return {playSong: true}
    case 'STOP_SONG':
      return {playSong: false}
    case 'SHOW_ANIMATION':
      return {showAnimation: true}
    case 'HIDE_ANIMATION':
      return {showAnimation:false}
    default:
      return state
  }
}

export default jigglepuff