import { Scene, GameObjects, Types } from 'phaser';

export class Exterior extends Scene
{
    private player!: GameObjects.Rectangle;
    private cursors!: Types.Input.Keyboard.CursorKeys;
    private speed: number = 150;

    constructor ()
    {
        super('Exterior');
    }

    preload ()
    {
    }

    create ()
    {
        // Joueur : un rectangle blanc au centre
        this.player = this.add.rectangle(240, 216, 16, 16, 0xffffff);
        this.physics.add.existing(this.player);

        // Touches directionnelles
        this.cursors = this.input.keyboard!.createCursorKeys();
    }

    update ()
    {
        const body = this.player.body as Phaser.Physics.Arcade.Body;

        body.setVelocity(0);

        if (this.cursors.left.isDown) body.setVelocityX(-this.speed);
        else if (this.cursors.right.isDown) body.setVelocityX(this.speed);

        if (this.cursors.up.isDown) body.setVelocityY(-this.speed);
        else if (this.cursors.down.isDown) body.setVelocityY(this.speed);
    }
}