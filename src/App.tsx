import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Sound } from './models';
import { DrumPad } from './DrumPad';


function App() {
  const sounds: Sound[] = [
    {
      name: 'kick1',
      path: 'assets/kick-1.wav',
      key: 'q'
    }, {
      name: 'kick2',
      path: 'assets/kick-2.wav',
      key: 'w'
    }, {
      name: 'kick3',
      path: 'assets/kick-3.wav',
      key: 'e'
    }, {
      name: 'kick4',
      path: 'assets/kick-4.wav',
      key: 'a'
    }, {
      name: 'clap1',
      path: 'assets/kick-1.wav',
      key: 'q'
    }, , {
      name: 'clap2',
      path: 'assets/kick-1.wav',
      key: 'q'
    }, {
      name: 'hi-hat-1',
      path: 'assets/kick-1.wav',
      key: 'q'
    }, {
      name: 'hi-hat-2',
      path: 'assets/kick-1.wav',
      key: 'q'
    }, {
      name: 'bass',
      path: 'assets/kick-1.wav',
      key: 'q'
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
