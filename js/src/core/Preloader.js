
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		this.load.setPreloadSprite(this.preloadBar);

		/*
		this.load.image('titlepage', 'images/title.jpg');
		this.load.atlas('playButton', 'images/play_button.png', 'images/play_button.json');
		this.load.audio('titleMusic', ['audio/main_menu.mp3']);
		this.load.bitmapFont('caslon', 'fonts/caslon.png', 'fonts/caslon.xml');
        */
        this.load.image('titlepage', 'assets/images/Phaser-2D-Flat.png');
        this.load.atlas('tiles', 'assets/images/walk.png', 'assets/images/walk.json');
        this.load.atlas('playButton', 'assets/images/button_texture_atlas.png', 'assets/images/button_texture_atlas.json');

        this.load.image('room', 'assets/images/room.png');
        this.load.image('inventory', 'assets/images/Inventory.png');

        this.load.atlasJSONHash('lampkey', 'assets/images/lampkey.png', 'assets/images/lampkey.json');
        this.load.atlasJSONHash('hero', 'assets/images/walk.png', 'assets/images/walk.json');
        this.load.atlasJSONHash('lungur', 'assets/images/lungur.png', 'assets/images/lungur.js');

	},

	create: function () {

		this.preloadBar.cropEnabled = false;

        this.game.state.start('MainMenu');

	},

	update: function () {

		/*
		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
			this.game.state.start('MainMenu');
		}
		*/

	}

};
