# 🎮 Phaser Pixel Game

> Un mini-jeu RPG style Game Boy Color réalisé dans le cadre du Learning Lab (M2 DFS - MyDigitalSchool Nantes).

## Techno explorée

**Phaser 3** — moteur de jeu 2D open source pour le web.

Stack complète :
- Phaser 3
- TypeScript
- Vite
- Tiled (éditeur de tilemaps)

## Concept

Un jeu RPG top-down inspiré de l'esthétique Game Boy Color (Pokémon Or/Argent).
Le joueur se déplace sur une map extérieure et peut rentrer dans deux maisons.

## Installation

```bash
git clone https://github.com/Thais-PH/phaser-pixel-game.git
cd phaser-pixel-game
npm install
npm run dev
```

Ouvre ensuite `http://localhost:8080` dans ton navigateur.

## Contrôles

| Touche  | Action             |
|---------|--------------------|
| ↑ ↓ ← → | Se déplacer        |
| Espace  | Interagir          |
| Échap   | Fermer un dialogue |

## Structure du projet
```
src/
├── game/
│   ├── scenes/
│   │   ├── TitleScreen.ts
│   │   ├── Exterior.ts
│   │   ├── HouseL.ts
│   │   ├── HouseR.ts
│   │   └── DialogueScene.ts
│   └── main.ts
└── main.ts
public/
└── assets/
```

## Ce qui fonctionne

- Écran titre avec contrôles
- Map extérieure avec deux maisons navigables
- Collisions avec les murs et meubles
- Transitions entre scènes (extérieur ↔ intérieurs)
- Sprite joueur animé en 4 directions
- Boîte de dialogue style GBC au bureau (HouseL)

## Limites et pistes d'amélioration

- Pas de musique ni d'effets sonores
- HouseR sans interaction pour le moment
- Collisions perfectibles sur certains meubles

## Budget fictif (mise en prod)

| Poste       | Détail               | Coût       |
|-------------|----------------------|------------|
| Formation   | 3 jours × 400€       | 1 200€     |
| Hébergement | Vercel Pro (1 an)    | 240€       |
| Licences    | Phaser MIT, Vite MIT | 0€         |
| **Total**   |                      | **1 440€** |

## Impact

- **Green IT** : application statique légère, zéro serveur, zéro base de données
- **Sécurité** : Phaser MIT, aucune dépendance critique connue
- **Licence** : MIT — libre d'utilisation et de modification

## Assets

- Sprites personnage : [OpenMon Assets](https://itch.io/queue/c/4240964/openmon-assets?game_id=4269684) par OpenMon
- Mobilier intérieur : [Makeshift Furniture Set](https://0-mem0ry.itch.io/makeshift-furniture-set-free) par 0-mem0ry
- Mobilier intérieur : [Messy Furniture Set](https://0-mem0ry.itch.io/messy-furniture-set-mega-bundle-free) par 0-mem0ry
- Mobilier intérieur : [Midcentury Modern Furniture Set](https://0-mem0ry.itch.io/midcentury-modern-furniture-set-free) par 0-mem0ry
- Ordinateur : [Little Bits Office](https://adriccustoms.itch.io/little-bits-office) par Adriccustoms
- Mur et sol : [Pixel Cabin Assets](https://lumi-li.itch.io/pixel-cabin-assets) par Lumi-li
- Tileset extérieur : [Harvest Summer Forest Pack](https://snowhex.itch.io/harvest-summer-forest-pack) par Snowhex
- Maisons : [Little Dreamyland Asset Pack](https://starmixu.itch.io/little-dreamyland-asset-pack) par Starmixu
- Icônes touches : [Pixel Keys x16](https://joshuajennerdev.itch.io/pixel-keys-x16) par JoshuaJennerDev
- Police : [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) par CodeMan38

---

## Documentation technique Phaser (template original)

> Les informations ci-dessous proviennent du template officiel Phaser + Vite + TypeScript.

### Commandes disponibles

| Commande              | Description                                |
|-----------------------|--------------------------------------------|
| `npm install`         | Installer les dépendances                  |
| `npm run dev`         | Lancer le serveur de développement         |
| `npm run build`       | Build de production dans le dossier `dist` |
| `npm run dev-nolog`   | Lancer sans envoi de données anonymes      |
| `npm run build-nolog` | Build sans envoi de données anonymes       |

### Ressources Phaser

- [API Docs](https://newdocs.phaser.io)
- [Examples](https://labs.phaser.io)
- [Discord](https://discord.gg/phaser)
- [Forum](https://phaser.discourse.group/)
