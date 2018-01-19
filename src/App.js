import React, {Component} from 'react';

class App extends Component {

  playSounds = (event) => {
    let audio = document.createElement("audio");
    audio.src = "./sounds/" + event.target.id + ".mp3";
    audio.currentTime = 0;
    audio.play();
  }
  render() {
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let sounds = arr.map((i) => {
      let src = `./sounds/${i}.mp3`;
      let toReturn = <audio key={i} src={src} preload="true"></audio>;
      return toReturn;
    });
    let buttons = arr.map((i) => {
      return (<div className="beatbox__sound-btn" key={i} id={i} onClick={this.playSounds}></div>);
    });
    return (
      <div className="beatbox">
          {sounds}
        <div className="beatbox__container">
          {buttons}
        </div>
      </div>
    );
  }
}

export default App;
