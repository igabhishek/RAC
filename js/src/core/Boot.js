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

		this.game.stage.disableVisibilityChange = true;

	    if (this.game.device.desktop)
	    {
			this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            
            /*
            this.game.scale.minWidth = 400;
            this.game.scale.minHeight = 300;
            this.game.scale.maxWidth = 800;
            this.game.scale.maxHeight = 600;
            */
            
            this.game.scale.setShowAll();
            this.game.scale.refresh();

	    }
	    else
	    {
			this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            
            /*
            this.game.scale.minWidth = 480;
            this.game.scale.minHeight = 260;
            this.game.scale.maxWidth = 1024;
            this.game.scale.maxHeight = 768;
            */
            
            this.game.scale.setShowAll();
            this.game.scale.refresh();
	    }

	    this.game.state.start('Preloader');

	}

};