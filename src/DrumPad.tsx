import React, { ReactNode } from "react";
import { Sound } from "./models";

type DrumPadProps = {
    sound: Sound
};

type DrumPadState = {

};

export class DrumPad extends React.Component<DrumPadProps, DrumPadState> {
    render(): ReactNode {
        return <div className="drum-pad">
            {this.props.sound.key}
            <audio
                id={this.props.sound.key}
                src={this.props.sound.path}>{this.props.sound.key}</audio>
        </div>
    }
}