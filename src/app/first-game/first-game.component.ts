import { Component, OnInit } from '@angular/core';

import {Game, AUTO, Physics, Group, Sprite, CursorKeys, Text} from 'phaser-ce';

@Component({
  selector: 'app-first-game',
  templateUrl: './first-game.component.html',
  styleUrls: ['./first-game.component.css']
})
export class FirstGameComponent implements OnInit {

  game: Game;
  platforms: Group;
  player: Sprite;
  cursors: CursorKeys;
  stars: Group;
  scoreText: Text;
  score = 0;

  gameState = {
    preload: this.preload.bind(this),
    create: this.create.bind(this),
    update: this.update.bind(this),
    render: this.render.bind(this)
  };

  ngOnInit() {
    this.game = new Game(
      800,
      600,
      AUTO,
      'phaser-root',
      this.gameState
    );
  }

  preload() {
    this.game.load.image('sky', 'assets/first/sky.png');
    this.game.load.image('ground', 'assets/first/platform.png');
    this.game.load.image('star', 'assets/first/star.png');
    this.game.load.spritesheet('dude', 'assets/first/dude.png', 32, 48);
  }

  create() {
    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.game.add.sprite(0, 0, 'star');
    //  We're going to be using physics, so enable the Arcade Physics system
    this.game.physics.startSystem(Physics.ARCADE);

    //  A simple background for our this.game
    this.game.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    this.platforms = this.game.add.group();

    //  We will enable physics for any object that is created in this group
    this.platforms.enableBody = true;

    // Here we create the ground.
    const ground = this.platforms.create(0, this.game.world.height - 64, 'ground');

    //  Scale it to fit the width of the this.game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    let ledge = this.platforms.create(400, 400, 'ground');

    ledge.body.immovable = true;

    ledge = this.platforms.create(-150, 250, 'ground');

    ledge.body.immovable = true;

    // The player and its settings
    this.player = this.game.add.sprite(32, this.game.world.height - 150, 'dude');

    //  We need to enable physics on the this.player
    this.game.physics.arcade.enable(this.player);

    //  this.Player physics properties. Give the little guy a slight bounce.
    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 300;
    this.player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    this.stars = this.game.add.group();

    this.stars.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    for (let i = 0; i < 12; i++) {
        //  Create a star inside of the 'stars' group
        const star = this.stars.create(i * 70, 0, 'star');

        //  Let gravity do its thing
        star.body.gravity.y = 6;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

    this.scoreText = this.game.add.text(16, 16, 'Score: 0', { fontSize: 32, fill: '#000' });

  }

  update() {
    const hitPlatform = this.game.physics.arcade.collide(this.player, this.platforms);

    const starHitPlatform = this.game.physics.arcade.collide(this.stars, this.platforms);

    // const self = this;
    // const collectStar = function(player, star) {
    //   star.kill();

    //   self.score += 10;
    //   self.scoreText.text = 'Score: ' + self.score;
    // };

    const getStar = this.game.physics.arcade.overlap(this.player, this.stars, this.collectStar.bind(this));

    //  Reset the players velocity (movement)
    this.player.body.velocity.x = 0;

    if (this.cursors.left.isDown) {
        //  Move to the left
        this.player.body.velocity.x = -150;

        this.player.animations.play('left');
    } else if (this.cursors.right.isDown) {
        //  Move to the right
        this.player.body.velocity.x = 150;

        this.player.animations.play('right');
    } else {
        //  Stand still
        this.player.animations.stop();

        this.player.frame = 4;
    }

    //  Allow the this.player to jump if they are touching the ground.
    if (this.cursors.up.isDown && this.player.body.touching.down && hitPlatform) {
        this.player.body.velocity.y = -350;
    }
  }

  // not working see why
  collectStar(player, star) {
    star.kill();

    this.score += 10;
    this.scoreText.text = 'Score: ' + this.score;
  }

  render() {
  }
}
