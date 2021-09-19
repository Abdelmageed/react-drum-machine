import './App.css';
import { Sound } from './models';
import { DrumPad } from './DrumPad';
import { Component } from 'react';
import Display from './Display';

const sounds: Sound[] = [
  {
    name: 'kick1',
    path: `${process.env.PUBLIC_URL}/sounds/kick-1.wav`,
    key: 'Q'
  }, {
    name: 'kick2',
    path: `${process.env.PUBLIC_URL}/sounds/kick-2.wav`,
    key: 'W'
  }, {
    name: 'kick3',
    path: `${process.env.PUBLIC_URL}/sounds/kick-3.wav`,
    key: 'E'
  }, {
    name: 'kick4',
    path: `${process.env.PUBLIC_URL}/sounds/kick-4.wav`,
    key: 'A'
  }, {
    name: 'clap1',
    path: `${process.env.PUBLIC_URL}/sounds/clap-1.wav`,
    key: 'S'
  }, , {
    name: 'clap2',
    path: `${process.env.PUBLIC_URL}/sounds/clap-2.wav`,
    key: 'D'
  }, {
    name: 'hi-hat-1',
    path: `${process.env.PUBLIC_URL}/sounds/hi-hat-1.wav`,
    key: 'Z'
  }, {
    name: 'hi-hat-2',
    path: `${process.env.PUBLIC_URL}/sounds/hi-hat-2.wav`,
    key: 'X'
  }, {
    name: 'bass',
    path: `${process.env.PUBLIC_URL}/sounds/bass.wav`,
    key: 'C'
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
