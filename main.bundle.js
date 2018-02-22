webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<nav>\n  <a routerLink=\"/first\">Sample Game</a>\n  <a routerLink=\"/second\">Second Game</a>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'The Game!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__first_game_first_game_component__ = __webpack_require__("../../../../../src/app/first-game/first-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__second_game_second_game_component__ = __webpack_require__("../../../../../src/app/second-game/second-game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__first_game_first_game_component__["a" /* FirstGameComponent */],
                __WEBPACK_IMPORTED_MODULE_7__second_game_second_game_component__["a" /* SecondGameComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_router__["a" /* appRoutes */])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__first_game_first_game_component__ = __webpack_require__("../../../../../src/app/first-game/first-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__second_game_second_game_component__ = __webpack_require__("../../../../../src/app/second-game/second-game.component.ts");



var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'first', component: __WEBPACK_IMPORTED_MODULE_1__first_game_first_game_component__["a" /* FirstGameComponent */] },
    { path: 'second', component: __WEBPACK_IMPORTED_MODULE_2__second_game_second_game_component__["a" /* SecondGameComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/first-game/first-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#phaser-root {\n  width: 50%;\n  margin: 0 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/first-game/first-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"phaser-root\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/first-game/first-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_phaser_ce__ = __webpack_require__("../../../../phaser-ce/build/phaser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_phaser_ce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_phaser_ce__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FirstGameComponent = /** @class */ (function () {
    function FirstGameComponent() {
        this.score = 0;
        this.gameState = {
            preload: this.preload.bind(this),
            create: this.create.bind(this),
            update: this.update.bind(this),
            render: this.render.bind(this)
        };
    }
    FirstGameComponent.prototype.ngOnInit = function () {
        this.game = new __WEBPACK_IMPORTED_MODULE_1_phaser_ce__["Game"](800, 600, __WEBPACK_IMPORTED_MODULE_1_phaser_ce__["AUTO"], 'phaser-root', this.gameState);
    };
    FirstGameComponent.prototype.preload = function () {
        this.game.load.image('sky', 'assets/first/sky.png');
        this.game.load.image('ground', 'assets/first/platform.png');
        this.game.load.image('star', 'assets/first/star.png');
        this.game.load.spritesheet('dude', 'assets/first/dude.png', 32, 48);
    };
    FirstGameComponent.prototype.create = function () {
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.add.sprite(0, 0, 'star');
        //  We're going to be using physics, so enable the Arcade Physics system
        this.game.physics.startSystem(__WEBPACK_IMPORTED_MODULE_1_phaser_ce__["Physics"].ARCADE);
        //  A simple background for our this.game
        this.game.add.sprite(0, 0, 'sky');
        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.game.add.group();
        //  We will enable physics for any object that is created in this group
        this.platforms.enableBody = true;
        // Here we create the ground.
        var ground = this.platforms.create(0, this.game.world.height - 64, 'ground');
        //  Scale it to fit the width of the this.game (the original sprite is 400x32 in size)
        ground.scale.setTo(2, 2);
        //  This stops it from falling away when you jump on it
        ground.body.immovable = true;
        //  Now let's create two ledges
        var ledge = this.platforms.create(400, 400, 'ground');
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
        for (var i = 0; i < 12; i++) {
            //  Create a star inside of the 'stars' group
            var star = this.stars.create(i * 70, 0, 'star');
            //  Let gravity do its thing
            star.body.gravity.y = 6;
            //  This just gives each star a slightly random bounce value
            star.body.bounce.y = 0.7 + Math.random() * 0.2;
        }
        this.scoreText = this.game.add.text(16, 16, 'Score: 0', { fontSize: 32, fill: '#000' });
    };
    FirstGameComponent.prototype.update = function () {
        var hitPlatform = this.game.physics.arcade.collide(this.player, this.platforms);
        var starHitPlatform = this.game.physics.arcade.collide(this.stars, this.platforms);
        // const self = this;
        // const collectStar = function(player, star) {
        //   star.kill();
        //   self.score += 10;
        //   self.scoreText.text = 'Score: ' + self.score;
        // };
        var getStar = this.game.physics.arcade.overlap(this.player, this.stars, this.collectStar.bind(this));
        //  Reset the players velocity (movement)
        this.player.body.velocity.x = 0;
        if (this.cursors.left.isDown) {
            //  Move to the left
            this.player.body.velocity.x = -150;
            this.player.animations.play('left');
        }
        else if (this.cursors.right.isDown) {
            //  Move to the right
            this.player.body.velocity.x = 150;
            this.player.animations.play('right');
        }
        else {
            //  Stand still
            this.player.animations.stop();
            this.player.frame = 4;
        }
        //  Allow the this.player to jump if they are touching the ground.
        if (this.cursors.up.isDown && this.player.body.touching.down && hitPlatform) {
            this.player.body.velocity.y = -350;
        }
    };
    // not working see why
    FirstGameComponent.prototype.collectStar = function (player, star) {
        star.kill();
        this.score += 10;
        this.scoreText.text = 'Score: ' + this.score;
    };
    FirstGameComponent.prototype.render = function () {
    };
    FirstGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-first-game',
            template: __webpack_require__("../../../../../src/app/first-game/first-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/first-game/first-game.component.css")]
        })
    ], FirstGameComponent);
    return FirstGameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/second-game/enemy-tank.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnemyTank; });
var EnemyTank = /** @class */ (function () {
    function EnemyTank(index, game, player, bullets) {
        var x = game.world.randomX;
        var y = game.world.randomY;
        this.game = game;
        this.health = 3;
        this.player = player;
        this.bullets = bullets;
        this.fireRate = 1000;
        this.nextFire = 0;
        this.alive = true;
        this.shadow = game.add.sprite(x, y, 'enemy', 'shadow');
        this.tank = game.add.sprite(x, y, 'enemy', 'tank1');
        this.turret = game.add.sprite(x, y, 'enemy', 'turret');
        this.shadow.anchor.set(0.5);
        this.tank.anchor.set(0.5);
        this.turret.anchor.set(0.3, 0.5);
        this.tank.name = index.toString();
        game.physics.enable(this.tank, Phaser.Physics.ARCADE);
        this.tank.body.immovable = false;
        this.tank.body.collideWorldBounds = true;
        this.tank.body.bounce.setTo(1, 1);
        this.tank.angle = game.rnd.angle();
        game.physics.arcade.velocityFromRotation(this.tank.rotation, 100, this.tank.body.velocity);
    }
    EnemyTank.prototype.damage = function () {
        this.health -= 1;
        if (this.health <= 0) {
            this.alive = false;
            this.shadow.kill();
            this.tank.kill();
            this.turret.kill();
            return true;
        }
        return false;
    };
    EnemyTank.prototype.update = function () {
        this.shadow.x = this.tank.x;
        this.shadow.y = this.tank.y;
        this.shadow.rotation = this.tank.rotation;
        this.turret.x = this.tank.x;
        this.turret.y = this.tank.y;
        this.turret.rotation = this.game.physics.arcade.angleBetween(this.tank, this.player);
        if (this.game.physics.arcade.distanceBetween(this.tank, this.player) < 300) {
            if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0) {
                this.nextFire = this.game.time.now + this.fireRate;
                var bullet = this.bullets.getFirstDead();
                bullet.reset(this.turret.x, this.turret.y);
                bullet.rotation = this.game.physics.arcade.moveToObject(bullet, this.player, 500);
            }
        }
    };
    return EnemyTank;
}());



/***/ }),

/***/ "../../../../../src/app/second-game/second-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#phaser-tank {\n  width: 50%;\n  margin: 0 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/second-game/second-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"phaser-tank\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/second-game/second-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_phaser_ce__ = __webpack_require__("../../../../phaser-ce/build/phaser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_phaser_ce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_phaser_ce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enemy_tank__ = __webpack_require__("../../../../../src/app/second-game/enemy-tank.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SecondGameComponent = /** @class */ (function () {
    function SecondGameComponent() {
        this.gameState = {
            preload: this.preload.bind(this),
            create: this.create.bind(this),
            update: this.update.bind(this),
            render: this.render.bind(this)
        };
        this.enemiesTotal = 0;
        this.enemiesAlive = 0;
        this.currentSpeed = 0;
        this.fireRate = 100;
        this.nextFire = 0;
    }
    SecondGameComponent.prototype.ngOnInit = function () {
        this.game = new __WEBPACK_IMPORTED_MODULE_1_phaser_ce__["Game"](800, 600, Phaser.AUTO, 'phaser-tank', this.gameState);
    };
    SecondGameComponent.prototype.preload = function () {
        this.game.load.atlas('tank', 'assets/games/tanks/tanks.png', 'assets/games/tanks/tanks.json');
        this.game.load.atlas('enemy', 'assets/games/tanks/enemy-tanks.png', 'assets/games/tanks/tanks.json');
        this.game.load.image('logo', 'assets/games/tanks/logo.png');
        this.game.load.image('bullet', 'assets/games/tanks/bullet.png');
        this.game.load.image('earth', 'assets/games/tanks/scorched_earth.png');
        this.game.load.spritesheet('kaboom', 'assets/games/tanks/explosion.png', 64, 64, 23);
    };
    SecondGameComponent.prototype.create = function () {
        //  Resize our game world to be a 2000 x 2000 square
        this.game.world.setBounds(-1000, -1000, 2000, 2000);
        //  Our tiled scrolling background
        this.land = this.game.add.tileSprite(0, 0, 800, 600, 'earth');
        this.land.fixedToCamera = true;
        //  The base of our tank
        this.tank = this.game.add.sprite(0, 0, 'tank', 'tank1');
        this.tank.anchor.setTo(0.5, 0.5);
        this.tank.animations.add('move', ['tank1', 'tank2', 'tank3', 'tank4', 'tank5', 'tank6'], 20, true);
        //  This will force it to decelerate and limit its speed
        this.game.physics.enable(this.tank, Phaser.Physics.ARCADE);
        this.tank.body.drag.set(0.2);
        this.tank.body.maxVelocity.setTo(400, 400);
        this.tank.body.collideWorldBounds = true;
        //  Finally the turret that we place on-top of the tank body
        this.turret = this.game.add.sprite(0, 0, 'tank', 'turret');
        this.turret.anchor.setTo(0.3, 0.5);
        //  The enemies bullet group
        this.enemyBullets = this.game.add.group();
        this.enemyBullets.enableBody = true;
        this.enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.enemyBullets.createMultiple(100, 'bullet');
        this.enemyBullets.setAll('anchor.x', 0.5);
        this.enemyBullets.setAll('anchor.y', 0.5);
        this.enemyBullets.setAll('outOfBoundsKill', true);
        this.enemyBullets.setAll('checkWorldBounds', true);
        //  Create some baddies to waste :)
        this.enemies = [];
        this.enemiesTotal = 20;
        this.enemiesAlive = 20;
        for (var i = 0; i < this.enemiesTotal; i++) {
            this.enemies.push(new __WEBPACK_IMPORTED_MODULE_2__enemy_tank__["a" /* EnemyTank */](i, this.game, this.tank, this.enemyBullets));
        }
        //  A shadow below our tank
        this.shadow = this.game.add.sprite(0, 0, 'tank', 'shadow');
        this.shadow.anchor.setTo(0.5, 0.5);
        //  Our bullet group
        this.bullets = this.game.add.group();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.bullets.createMultiple(30, 'bullet', 0, false);
        this.bullets.setAll('anchor.x', 0.5);
        this.bullets.setAll('anchor.y', 0.5);
        this.bullets.setAll('outOfBoundsKill', true);
        this.bullets.setAll('checkWorldBounds', true);
        //  Explosion pool
        this.explosions = this.game.add.group();
        for (var index = 0; index < 10; index++) {
            var explosionAnimation = this.explosions.create(0, 0, 'kaboom', [0], false);
            explosionAnimation.anchor.setTo(0.5, 0.5);
            explosionAnimation.animations.add('kaboom');
        }
        this.tank.bringToTop();
        this.turret.bringToTop();
        this.logo = this.game.add.sprite(0, 200, 'logo');
        this.logo.fixedToCamera = true;
        this.game.input.onDown.add(this.removeLogo.bind(this), this);
        this.game.camera.follow(this.tank);
        this.game.camera.deadzone = new Phaser.Rectangle(150, 150, 500, 300);
        this.game.camera.focusOnXY(0, 0);
        this.cursors = this.game.input.keyboard.createCursorKeys();
    };
    SecondGameComponent.prototype.removeLogo = function () {
        this.game.input.onDown.remove(this.removeLogo.bind(this), this);
        this.logo.kill();
    };
    SecondGameComponent.prototype.update = function () {
        this.game.physics.arcade.overlap(this.enemyBullets, this.tank, this.bulletHitPlayer, null, this);
        this.enemiesAlive = 0;
        for (var i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i].alive) {
                this.enemiesAlive++;
                this.game.physics.arcade.collide(this.tank, this.enemies[i].tank);
                this.game.physics.arcade.overlap(this.bullets, this.enemies[i].tank, this.bulletHitEnemy, null, this);
                this.enemies[i].update();
            }
        }
        if (this.cursors.left.isDown) {
            this.tank.angle -= 4;
        }
        else if (this.cursors.right.isDown) {
            this.tank.angle += 4;
        }
        if (this.cursors.up.isDown) {
            //  The speed we'll travel at
            this.currentSpeed = 300;
        }
        else {
            if (this.currentSpeed > 0) {
                this.currentSpeed -= 4;
            }
        }
        if (this.currentSpeed > 0) {
            this.game.physics.arcade.velocityFromRotation(this.tank.rotation, this.currentSpeed, this.tank.body.velocity);
        }
        this.land.tilePosition.x = -this.game.camera.x;
        this.land.tilePosition.y = -this.game.camera.y;
        //  Position all the parts and align rotations
        this.shadow.x = this.tank.x;
        this.shadow.y = this.tank.y;
        this.shadow.rotation = this.tank.rotation;
        this.turret.x = this.tank.x;
        this.turret.y = this.tank.y;
        this.turret.rotation = this.game.physics.arcade.angleToPointer(this.turret);
        if (this.game.input.activePointer.isDown) {
            //  Boom!
            this.fire();
        }
    };
    SecondGameComponent.prototype.bulletHitPlayer = function (tank, bullet) {
        bullet.kill();
    };
    SecondGameComponent.prototype.bulletHitEnemy = function (tank, bullet) {
        bullet.kill();
        var destroyed = this.enemies[tank.name].damage();
        if (destroyed) {
            var explosionAnimation = this.explosions.getFirstExists(false);
            explosionAnimation.reset(tank.x, tank.y);
            explosionAnimation.play('kaboom', 30, false, true);
        }
    };
    SecondGameComponent.prototype.fire = function () {
        if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0) {
            this.nextFire = this.game.time.now + this.fireRate;
            var bullet = this.bullets.getFirstExists(false);
            bullet.reset(this.turret.x, this.turret.y);
            bullet.rotation = this.game.physics.arcade.moveToPointer(bullet, 1000, this.game.input.activePointer, 500);
        }
    };
    SecondGameComponent.prototype.render = function () {
        // game.debug.text('Active Bullets: ' + bullets.countLiving() + ' / ' + bullets.length, 32, 32);
        this.game.debug.text('Enemies: ' + this.enemiesAlive + ' / ' + this.enemiesTotal, 32, 32);
    };
    SecondGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-second-game',
            template: __webpack_require__("../../../../../src/app/second-game/second-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/second-game/second-game.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SecondGameComponent);
    return SecondGameComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map