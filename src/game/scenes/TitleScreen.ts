import * as Phaser from 'phaser';

export class TitleScreen extends Phaser.Scene
{
    constructor ()
    {
        super('TitleScreen');
    }

    preload ()
    {
        this.load.setPath('assets');
        this.load.image('arrow_up', 'pxkb_arrow_up.png');
        this.load.image('arrow_down', 'pxkb_arrow_down.png');
        this.load.image('arrow_left', 'pxkb_arrow_left.png');
        this.load.image('arrow_right', 'pxkb_arrow_right.png');
        this.load.image('space', 'pxkb_space_4.png');
    }

    create ()
    {
        const { width, height } = this.scale;

        this.cameras.main.setBackgroundColor('#3cc530');

        // Titre
        this.add.text(width / 2, height / 4, 'MON PORTFOLIO', {
            fontFamily: '"Press Start 2P"',
            fontSize: '16px',
            color: '#000000',
        }).setOrigin(0.5);

        // Flèches - disposition croix
        const cx = width / 2 - 80; // centre x de la croix de flèches
        const cy = height / 2 - 20;        const s = 36; // espacement

        this.add.image(cx, cy - s, 'arrow_up').setScale(1.5);
        this.add.image(cx, cy + s, 'arrow_down').setScale(1.5);
        this.add.image(cx - s, cy, 'arrow_left').setScale(1.5);
        this.add.image(cx + s, cy, 'arrow_right').setScale(1.5);

        this.add.text(cx + 70, cy, 'se déplacer', {
            fontFamily: '"Press Start 2P"',
            fontSize: '7px',
            color: '#000000',
        }).setOrigin(0, 0.5);

        // Barre espace
        this.add.image(cx, cy + s * 3, 'space').setScale(1.5);

        this.add.text(cx + 70, cy + s * 3, 'interagir', {
            fontFamily: '"Press Start 2P"',
            fontSize: '7px',
            color: '#000000',
        }).setOrigin(0, 0.5);

        // Press Start clignotant
        const pressStart = this.add.text(width / 2, height - 60, 'PRESS SPACE TO START', {
            fontFamily: '"Press Start 2P"',
            fontSize: '8px',
            color: '#000000',
        }).setOrigin(0.5);

        this.tweens.add({
            targets: pressStart,
            alpha: 0,
            duration: 500,
            yoyo: true,
            repeat: -1
        });

        this.input.keyboard!.once('keydown-SPACE', () => {
            this.scene.start('Exterior');
        });
    }
}