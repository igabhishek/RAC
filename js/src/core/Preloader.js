
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
        
        this.load.image('titlepage', 'assets/images/ui/Phaser-2D-Flat.png');
        this.load.atlas('playButton', 'assets/images/ui/button_texture_atlas.png', 'assets/images/ui/button_texture_atlas.json');

        this.load.image('room', 'assets/images/environment/room.png');
        this.load.image('inventory', 'assets/images/ui/Inventory.png');
        
        this.load.atlasJSONHash('hero', 'assets/images/characters/walk.png', 'assets/images/characters/walk.json');
        this.load.atlasJSONHash('lungur', 'assets/images/characters/lungur.png', 'assets/images/characters/lungur.js');
        this.load.atlasJSONHash('bg', 'assets/images/environment/bg.png', 'assets/images/environment/bg.json');
        
        this.load.json('config', 'assets/data/config.json');
        this.load.json('leveldata', 'assets/data/levelData.json');
        this.load.json('moduledata', 'assets/data/mod1.json');
        
        this.load.bitmapFont('carrier_command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
        
        this.load.atlasJSONHash('sprite1', 'assets/images/minigame2/01.png', 'assets/images/minigame2/01.json');
        this.load.atlasJSONHash('sprite2', 'assets/images/minigame2/02.png', 'assets/images/minigame2/02.json');

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
