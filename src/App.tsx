import './App.css';
import { Sound } from './models';
import { DrumPad } from './DrumPad';

function App() {
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

  return (
    <div id="drum-machine">
      <div id="display"></div>
      {sounds.map(sound => (
        <DrumPad key={sound.name} sound={sound}></DrumPad>
      ))}
    </div>
  );
}

export default App;
