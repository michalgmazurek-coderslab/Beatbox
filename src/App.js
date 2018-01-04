import React, {Component} from 'react';

class App extends Component {
  playSounds = (number) => {
    document.querySelector('#btn-' + number).addEventListener("click", () => {
      let audio = document.createElement("audio");
      audio.src = "sounds/" + number + '.mp3';
      audio.currentTime=0;
      audio.play();
    });
  }
  componentDidMount() {
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for (var i = 0; i < arr.length; i++) {
      this.playSounds(arr[i]);
    }
  }
  render() {
    return (<div className="beatbox">
      <audio src="sounds/1.mp3" preload="true"></audio>
      <audio src="sounds/2.mp3" preload="true"></audio>
      <audio src="sounds/3.mp3" preload="true"></audio>
      <audio src="sounds/4.mp3" preload="true"></audio>
      <audio src="sounds/5.mp3" preload="true"></audio>
      <audio src="sounds/6.mp3" preload="true"></audio>
      <audio src="sounds/7.mp3" preload="true"></audio>
      <audio src="sounds/8.mp3" preload="true"></audio>
      <audio src="sounds/9.mp3" preload="true"></audio>
      <audio src="sounds/10.mp3" preload="true"></audio>
      <audio src="sounds/11.mp3" preload="true"></audio>
      <audio src="sounds/12.mp3" preload="true"></audio>
      <audio src="sounds/13.mp3" preload="true"></audio>
      <audio src="sounds/14.mp3" preload="true"></audio>
      <audio src="sounds/15.mp3" preload="true"></audio>
      <audio src="sounds/16.mp3" preload="true"></audio>
      <audio src="sounds/17.mp3" preload="true"></audio>
      <audio src="sounds/18.mp3" preload="true"></audio>
      <audio src="sounds/19.mp3" preload="true"></audio>
      <audio src="sounds/20.mp3" preload="true"></audio>
      <div className="beatbox__container">
        <div className="beatbox__sound-btn" id="btn-1"></div>
        <div className="beatbox__sound-btn" id="btn-2"></div>
        <div className="beatbox__sound-btn" id="btn-3"></div>
        <div className="beatbox__sound-btn" id="btn-4"></div>
        <div className="beatbox__sound-btn" id="btn-5"></div>
        <div className="beatbox__sound-btn" id="btn-6"></div>
        <div className="beatbox__sound-btn" id="btn-7"></div>
        <div className="beatbox__sound-btn" id="btn-8"></div>
        <div className="beatbox__sound-btn" id="btn-9"></div>
        <div className="beatbox__sound-btn" id="btn-10"></div>
        <div className="beatbox__sound-btn" id="btn-11"></div>
        <div className="beatbox__sound-btn" id="btn-12"></div>
        <div className="beatbox__sound-btn" id="btn-13"></div>
        <div className="beatbox__sound-btn" id="btn-14"></div>
        <div className="beatbox__sound-btn" id="btn-15"></div>
        <div className="beatbox__sound-btn" id="btn-16"></div>
        <div className="beatbox__sound-btn" id="btn-17"></div>
        <div className="beatbox__sound-btn" id="btn-18"></div>
        <div className="beatbox__sound-btn" id="btn-19"></div>
        <div className="beatbox__sound-btn" id="btn-20"></div>
      </div>
    </div>);
  }
}

export default App;
