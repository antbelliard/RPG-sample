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

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#phaser-root {\n  width: 50%;\n  margin: 0 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <h1>{{title}}</h1>\n  <div id=\"phaser-root\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_phaser_ce__ = __webpack_require__("../../../../phaser-ce/build/phaser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_phaser_ce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_phaser_ce__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'The Game!';
        this.score = 0;
        this.gameState = {
            preload: this.preload.bind(this),
            create: this.create.bind(this),
            update: this.update.bind(this),
            render: this.render.bind(this)
        };
        this.game = new __WEBPACK_IMPORTED_MODULE_1_phaser_ce__["Game"](800, 600, __WEBPACK_IMPORTED_MODULE_1_phaser_ce__["AUTO"], 'phaser-root', this.gameState);
    }
    AppComponent.prototype.preload = function () {
        this.game.load.image('sky', 'assets/sky.png');
        this.game.load.image('ground', 'assets/platform.png');
        this.game.load.image('star', 'assets/star.png');
        this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    };
    AppComponent.prototype.create = function () {
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
    AppComponent.prototype.update = function () {
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
    AppComponent.prototype.collectStar = function (player, star) {
        star.kill();
        this.score += 10;
        this.scoreText.text = 'Score: ' + this.score;
    };
    AppComponent.prototype.render = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
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