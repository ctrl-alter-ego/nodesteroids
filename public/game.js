// public/game.js
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  // Load your assets here
}

function create() {
  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (cursors.left.isDown) {

  } else if (cursors.right.isDown) {

  }

  if (cursors.up.isDown) {

  } else if (cursors.down.isDown) {

  }
}