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

        // Maison Gauche
        const houseL = this.add.rectangle(100, 216, 80, 80, 0xd040000);
        this.physics.add.existing(houseL, true);
        this.physics.add.collider(this.player, houseL);

        //Maison Droite
        const houseR = this.add.rectangle(380, 216, 80, 80, 0x0040d0);
        this.physics.add.existing(houseR, true);
        this.physics.add.collider(this.player, houseR);

        //Zone de transition maison gauche (devant la porte)
        const doorL = this.add.rectangle(100, 260, 20, 10, 0xffff00);
        this.physics.add.existing(doorL, true);
        this.physics.add.overlap(this.player, doorL, () => {
            this.scene.start('HouseL');
        });

        //Zone de transition maison droite (devant la porte)
        const doorR = this.add.rectangle(380, 260, 20, 10, 0xffff00);
        this.physics.add.existing(doorR, true);
        this.physics.add.overlap(this.player, doorR, () => {
            this.scene.start('HouseR');
        });
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