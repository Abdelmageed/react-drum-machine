import './App.css';
import { Sound } from './models';
import { DrumPad } from './DrumPad';
import { Component } from 'react';
import Display from './Display';

const sounds: Sound[] = [
  {
    name: 'kick1',
    path: `${process.env.PUBLIC_URL}/sounds/kick-1.wav`,
    key: 'q'
  }, {
    name: 'kick2',
    path: `${process.env.PUBLIC_URL}/sounds/kick-2.wav`,
    key: 'w'
  }, {
    name: 'kick3',
    path: `${process.env.PUBLIC_URL}/sounds/kick-3.wav`,
    key: 'e'
  }, {
    name: 'kick4',
    path: `${process.env.PUBLIC_URL}/sounds/kick-4.wav`,
    key: 'a'
  }, {
    name: 'clap1',
    path: `${process.env.PUBLIC_URL}/sounds/clap-1.wav`,
    key: 's'
  }, , {
    name: 'clap2',
    path: `${process.env.PUBLIC_URL}/sounds/clap-2.wav`,
    key: 'd'
  }, {
    name: 'hi-hat-1',
    path: `${process.env.PUBLIC_URL}/sounds/hi-hat-1.wav`,
    key: 'z'
  }, {
    name: 'hi-hat-2',
    path: `${process.env.PUBLIC_URL}/sounds/hi-hat-2.wav`,
    key: 'x'
  }, {
    name: 'bass',
    path: `${process.env.PUBLIC_URL}/sounds/bass.wav`,
    key: 'c'
  }
] as Sound[];

type AppState = {
  playingSound: string
};

type AppProps = {};

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      playingSound: ''
    };

    this.setPlayingSound = this.setPlayingSound.bind(this);
    this.handleSoundEnded = this.handleSoundEnded.bind(this);
  }

  setPlayingSound(sound: string) {
    this.setState({
      playingSound: sound
    });
  }

  handleSoundEnded(sound: string) {
    this.setState((prevState) => ({
      playingSound: prevState.playingSound === sound ? '' : prevState.playingSound
    }));
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display"></div>
        {
          sounds.map(sound => (
            <DrumPad
              key={sound.name}
              sound={sound}
              soundPlayed={this.setPlayingSound}
              soundEnded={this.handleSoundEnded} />
          ))}
        <Display display={this.state.playingSound} />
      </div>
    );
  }
}

export default App;
