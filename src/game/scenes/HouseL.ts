import * as Phaser from 'phaser';

export class HouseL extends Phaser.Scene
{
    private player!: Phaser.Physics.Arcade.Sprite;
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private speed: number = 150;

    constructor ()
    {
        super('HouseL');
    }

    preload ()
    {
        this.load.setPath('assets');
        this.load.tilemapTiledJSON('houseL', 'houseL.json');

        this.load.image('houseGround', 'Set_1_0.png');
        this.load.image('furniture1Set', 'midcentury_modern_furnitureset.png');
        this.load.image('foundationSet', 'CabinInside.png');
        this.load.image('officeSet', 'Little_Bits_office_objects.png');

        this.load.spritesheet('player', 'Chara_Spritesheet.png', {
            frameWidth: 18,
            frameHeight: 26
        });
    }

    create ()
    {
        const map = this.make.tilemap({ key: 'houseL' });

        const groundTiles = map.addTilesetImage('ground', 'houseGround');
        const furniture1Tiles = map.addTilesetImage('furnitures1', 'furniture1Set');
        const foundationTiles = map.addTilesetImage('foundation', 'foundationSet');
        const furniture2Tiles = map.addTilesetImage('furnitures2', 'officeSet');

        const tilesets = [groundTiles!, furniture1Tiles!, foundationTiles!, furniture2Tiles!];

        map.createLayer('ground', tilesets);
        map.createLayer('wallpaper/floor', tilesets);
        map.createLayer('carpet', tilesets);
        map.createLayer('furnitures1', tilesets);
        map.createLayer('furnitures2', tilesets);
        map.createLayer('furnitures3', tilesets);

        this.cameras.main.setBackgroundColor('#1a1a1a');
        this.cameras.main.setZoom(2);
        this.cameras.main.centerOn(map.widthInPixels / 2, map.heightInPixels / 2);

        this.player = this.physics.add.sprite(map.widthInPixels / 2, map.heightInPixels - 40, 'player', 54);
        this.player.setFrame(90);

        this.cursors = this.input.keyboard!.createCursorKeys();

        const collisionLayer = map.getObjectLayer('collisions');
        const walls = this.physics.add.staticGroup();

        collisionLayer?.objects.forEach(obj => {
            if (obj.name === 'exit') {
                const exit = this.add.zone(
                    obj.x! + obj.width! / 2,
                    obj.y! + obj.height! / 2,
                    obj.width!,
                    obj.height!
                );
                this.physics.add.existing(exit, true);
                this.physics.add.overlap(this.player, exit, () => {
                    this.scene.start('Exterior', { fromHouse: 'HouseL' });
                });
            } else if (obj.name !== 'wallpaper') {
                // "wallpaper" est purement décoratif, on ne le bloque pas
                const wall = this.add.zone(
                    obj.x! + obj.width! / 2,
                    obj.y! + obj.height! / 2,
                    obj.width!,
                    obj.height!
                );
                this.physics.add.existing(wall, true);
                walls.add(wall);
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