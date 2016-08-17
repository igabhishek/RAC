BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, swap them for your own.
        /*
		this.load.image('titlepage', 'images/title.jpg');
		this.load.atlas('playButton', 'images/play_button.png', 'images/play_button.json');
		this.load.audio('titleMusic', ['audio/main_menu.mp3']);
		this.load.bitmapFont('caslon', 'fonts/caslon.png', 'fonts/caslon.xml');
        */
        
        //this.load.atlas('tiles', 'assets/images/spritesheet_grant.png', 'assets/images/grant.json');
        //this.load.atlas('playButton', 'assets/images/button_texture_atlas.png', 'assets/images/button_texture_atlas.json');

        this.load.image('room', 'assets/images/room.png');
        this.game.load.spritesheet('hero', 'assets/images/spritesheet_grant.png', 82, 292, 64);

        //this.load.atlasJSONHash('lampkey', 'assets/images/lampkey.png', 'assets/images/lampkey.json');
        //this.load.atlasJSONHash('hero', 'assets/images/spritesheet_grant.png', 'assets/images/grant.json');
        //this.load.atlasJSONHash('lungur', 'assets/images/lungur.png', 'assets/images/lungur.js');

	},

	create: function () {
        
        this.preloadBar.cropEnabled = false;

        this.game.state.start('MainMenu');

	}

};