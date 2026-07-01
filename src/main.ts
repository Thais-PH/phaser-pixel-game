import StartGame from './game/main';

declare const WebFont: any;

document.addEventListener('DOMContentLoaded', () => {
    WebFont.load({
        google: {
            families: ['Press Start 2P']
        },
        active: () => {
            StartGame('game-container');
        }
    });
});