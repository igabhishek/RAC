
BasicGame.MainMenu = function (game) {

	this.music = null;
    this.logo = null;
	this.playButton = null;
    this.fullScreen = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {


		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		//this.music = this.add.audio('titleMusic');
		//this.music.play();

        this.game.stage.backgroundColor = "FFF0F0";

		this.logo = this.add.sprite(0, 0, 'titlepage');
        this.logo.x = this.game.world.centerX - this.logo.width/2;

        this.playButton = this.add.button(200, 200, 'playButton', this.startGame, this, 'over', 'out', 'down');
        this.playButton.x = this.game.world.centerX - this.playButton.width/2;
        this.playButton.y = this.game.world.centerY - this.playButton.height/2;

        this.fullScreen = this.add.button(200, 200, 'playButton', this.goFullScreen, this, 'over', 'out', 'down');
        this.fullScreen.x = this.game.world.width - this.playButton.width;
        this.fullScreen.y = 0;

        //instant start
        this.startGame();

	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();

		//	And start the actual game
		this.game.state.start('Game');

	},

    goFullScreen: function(){
        this.game.stage.scale.startFullScreen();

        this.game.stage.scale.refresh();
    }

};
