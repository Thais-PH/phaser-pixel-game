import * as Phaser from 'phaser';

export class Exterior extends Phaser.Scene
{
    private player!: Phaser.GameObjects.Rectangle;
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private speed: number = 150;

    constructor ()
    {
        super('Exterior');
    }

    preload ()
    {
        this.load.setPath('assets');
        this.load.tilemapTiledJSON('world', 'world.json');
        this.load.image('exterior', 'Set_1_0.png');
        this.load.image('house', 'House_Tileset.png');
    }

    create ()
    {
        const map = this.make.tilemap({ key: 'world' });
        const exteriorTiles = map.addTilesetImage('exterior', 'exterior');
        const houseTiles = map.addTilesetImage('house', 'house');
        const tilesets = [exteriorTiles!, houseTiles!];

        map.createLayer('ground', tilesets);
        map.createLayer('ground objects', tilesets);
        map.createLayer('house', tilesets);
        map.createLayer('windows/doors', tilesets);

        this.player = this.add.rectangle(240, 300, 16, 16, 0xffffff);
        this.physics.add.existing(this.player);

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