import Phaser, { Scene } from 'phaser';

export class HouseR extends Scene
{
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor ()
    {
        super('HouseR');
    }

    preload ()
    {
    }

    create ()
    {
        this.cameras.main.setBackgroundColor('#8b4513');

        this.add.text(240, 180, 'Maison droite', {
            fontFamily: 'Arial',
            fontSize: 20,
            color: '#ffffff'
        }).setOrigin(0.5);

        this.add.text(240, 280, 'Appuyez sur ESPACE\npour sortir', {
            fontFamily: 'Arial',
            fontSize: 14,
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        this.cursors = this.input.keyboard!.createCursorKeys();
        this.input.keyboard!.on('keydown-SPACE', () => {
            this.scene.start('Exterior');
        });
    }
}