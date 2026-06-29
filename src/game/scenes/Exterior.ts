import * as Phaser from 'phaser';

export class Exterior extends Phaser.Scene
{
    private player!: Phaser.Physics.Arcade.Sprite;
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
        this.load.spritesheet('player', 'Chara_Spritesheet.png', {
            frameWidth: 18,
            frameHeight: 26
        });
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

       this.player = this.physics.add.sprite(240, 300, 'player', 54);

       this.anims.create({
        key: 'walk-down',
        frames: this.anims.generateFrameNumbers('player', { frames: [54, 55, 56] }),
        frameRate:8,
        repeat: -1
       });
       this.anims.create({
        key: 'walk-left',
        frames: this.anims.generateFrameNumbers('player', { frames: [66, 67, 68] }),
        frameRate: 8,
        repeat: -1
       });
       this.anims.create({
        key: 'walk-right',
        frames: this.anims.generateFrameNumbers('player', {frames: [78, 79, 80] }),
        frameRate: 8,
        repeat: -1
       });
       this.anims.create({
        key: 'walk-up',
        frames: this.anims.generateFrameNumbers('player', { frames: [90, 91, 92] }),
        frameRate: 8,
        repeat: -1
       });

        this.cursors = this.input.keyboard!.createCursorKeys();

        const collisionLayer = map.getObjectLayer('collisions');

        const walls = this.physics.add.staticGroup();

        collisionLayer?.objects.forEach(obj => {
            if (obj.name === 'wallL' || obj.name === 'wallR') {
                const wall = this.add.rectangle(
                    obj.x! + obj.width! / 2,
                    obj.y! + obj.height! / 2,
                    obj.width!,
                    obj.height!,
                    0x000000,
                    0
                );
                this.physics.add.existing(wall, true);
                walls.add(wall);
            }

            if (obj.name === 'doorL' || obj.name === 'doorR') {
                const door = this.add.rectangle(
                    obj.x! + obj.width! / 2,
                    obj.y! + obj.height! / 2 ,
                    obj.width!,
                    obj.height!,
                    0x000000,
                    0
                );
                this.physics.add.existing(door, true);
                this.physics.add.overlap(this.player, door, () => {
                    this.scene.start(obj.name === 'doorL' ? 'HouseL' : 'HouseR');
                });
            }
        });

        this.physics.add.collider(this.player, walls);
    }

    update ()
    {
        const body = this.player.body as Phaser.Physics.Arcade.Body;
        body.setVelocity(0);

        if (this.cursors.left.isDown) {
            body.setVelocityX(-this.speed);
            this.player.anims.play('walk-left', true);
        } else if (this.cursors.right.isDown) {
            body.setVelocityX(this.speed);
            this.player.anims.play('walk-right', true);
        } else if (this.cursors.up.isDown) {
            body.setVelocityY(-this.speed);
            this.player.anims.play('walk-up', true);
        } else if (this.cursors.down.isDown) {
            body.setVelocityY(this.speed);
            this.player.anims.play('walk-down', true);
        } else {
            this.player.anims.stop();
        }
    }
}