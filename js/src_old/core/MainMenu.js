
BasicGame.MainMenu = function (game) {

	this.music = null;
    this.logo = null;
	this.playButton = null;
    this.fullScreen = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {

        this.game.stage.backgroundColor = "FFF0F0";

		this.startGame();

	},

	update: function () {

    },

	startGame: function (pointer) {

		this.game.state.start('Game');

	},

    goFullScreen: function(){
        this.game.stage.scale.startFullScreen();

        this.game.stage.scale.refresh();
    }

};