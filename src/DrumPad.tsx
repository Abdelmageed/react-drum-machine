import React, { ReactNode } from "react";
import EventListener from 'react-event-listener';
import { Sound } from "./models";

type DrumPadProps = {
    sound: Sound,
    soundPlayed: (name: string) => void
    soundEnded: (name: string) => void
};

type DrumPadState = {

};

export class DrumPad extends React.Component<DrumPadProps, DrumPadState> {

    constructor(props: DrumPadProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.playSound = this.playSound.bind(this);
        this.soundEnded = this.soundEnded.bind(this);
    }

    handleClick() {
        this.playSound();
    }

    handleKeyDown(event: KeyboardEvent) {
        if (event.key.toLowerCase() === this.props.sound.key) {
            this.playSound();
        }
    }

    playSound() {
        const audio = document.getElementById(this.props.sound.key) as HTMLAudioElement;
        audio.play();

        this.props.soundPlayed(this.props.sound.name);
    }

    soundEnded() {
        this.props.soundEnded(this.props.sound.name);
    }

    render(): ReactNode {
        return (
            <EventListener
                target="window"
                onKeyDown={this.handleKeyDown}
            >
                <div className="drum-pad" onClick={this.handleClick}>
                    {this.props.sound.key}
                    <audio
                        id={this.props.sound.key}
                        src={this.props.sound.path}
                        onEnded={this.soundEnded}
                        className="clip">
                    </audio>
                </div>
            </EventListener>
        );
    }
}