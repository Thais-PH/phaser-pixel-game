import * as Phaser from 'phaser';

export class DialogueScene extends Phaser.Scene
{
    private selectedIndex: number = 0;
    private options: string[] = ['Choix 1', 'Choix 2'];
    private optionTexts: Phaser.GameObjects.Text[] = [];
    private cursor!: Phaser.GameObjects.Text;

    constructor ()
    {
        super('DialogueScene');
    }

    preload () {}

    create ()
    {
        const { width, height } = this.scale;
        // Fond semi-transparent
        const bg = this.add.graphics();
        bg.fillStyle(0x000000, 0.5);
        bg.fillRect(0, 0, width, height);

        // Boîte de dialogue style GBC
        const boxX = 20;
        const boxY = height - 120;
        const boxW = width - 40;
        const boxH = 100;

        // Bordure extérieure
        const box = this.add.graphics();
        box.fillStyle(0xffffff);
        box.fillRect(boxX, boxY, boxW, boxH);
        box.lineStyle(4, 0x0f380f);
        box.strokeRect(boxX, boxY, boxW, boxH);
        box.lineStyle(2, 0x0f380f);
        box.strokeRect(boxX + 4, boxY + 4, boxW - 8, boxH - 8);

        // Texte de la boîte
        this.add.text(boxX + 16, boxY + 16, 'Que veux-tu faire ?', {
            fontFamily: '"Press Start 2P"',
            fontSize: '7px',
            color: '#0f380f',
        });

        // Options
        this.options.forEach((option, index) => {
            const text = this.add.text(boxX + 30, boxY + 45 + index * 22, option, {
                fontFamily: '"Press Start 2P"',
                fontSize: '7px',
                color: '#0f380f',
            });
            this.optionTexts.push(text);
        });

        // Curseur
        this.cursor = this.add.text(boxX + 16, boxY + 45, '>', {
            fontFamily: '"Press Start 2P"',
            fontSize: '7px',
            color: '#0f380f',
        });

        // Navigation
        this.input.keyboard!.on('keydown-UP', () => {
            this.selectedIndex = Math.max(0, this.selectedIndex - 1);
            this.updateCursor();
        });

        this.input.keyboard!.on('keydown-DOWN', () => {
            this.selectedIndex = Math.min(this.options.length - 1, this.selectedIndex + 1);
            this.updateCursor();
        });

        this.input.keyboard!.on('keydown-SPACE', () => {
            this.confirm();
        });

        // Fermer avec Echap
        this.input.keyboard!.on('keydown-ESC', () => {
            this.scene.stop('DialogueScene');
            this.scene.resume('HouseL');
        });
    }

    private updateCursor ()
    {
        this.cursor.setY(this.optionTexts[this.selectedIndex].y);
    }

    private confirm ()
    {
        if (this.selectedIndex === 0) {
            console.log('Choix 1');

        } else {
            console.log('Choix 2');

        }
    }
}