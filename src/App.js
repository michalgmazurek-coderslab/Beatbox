import React, {Component} from 'react';

class App extends Component {
  playSounds = (number) => {
    document.querySelector('#btn-' + number).addEventListener("mousedown", () => {
      console.log('Działa');
      var audio = new Audio('sounds/'+number+'.mp3');
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
