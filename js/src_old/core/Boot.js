BasicGame = {};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {

	preload: function () {

		this.load.image('preloaderBackground', 'assets/images/preloader_background.jpg');
		this.load.image('preloaderBar', 'assets/images/preloader_bar.png');

	},

	create: function () {

		this.game.input.maxPointers = 1;

		//this.game.stage.disableVisibilityChange = true;

	    if (this.game.device.desktop) {
			
            this.game.stage.scale.pageAlignHorizontally = true;
            this.game.stage.scale.pageAlignVertically = true;

            this.game.stage.scale.minWidth = 1024;
            this.game.stage.scale.minHeight = 576;
            this.game.stage.scale.maxWidth = 1024;
            this.game.stage.scale.maxHeight = 576;

	    }
        
	    this.game.state.start('Preloader');

	}

};