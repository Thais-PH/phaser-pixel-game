import { Exterior } from './scenes/Exterior';
import { AUTO, Game, Scale,Types } from 'phaser';

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Types.Core.GameConfig = {
    type: AUTO,
    width: 480,
    height: 432,
    parent: 'game-container',
    backgroundColor: '#9bbc0f',
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    scene: [
        Exterior
    ],
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
}

export default StartGame;
