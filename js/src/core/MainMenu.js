
BasicGame.MainMenu = function (game) {

	this.music = null;
    this.logo = null;
	this.playButton = null;
    this.fullScreen = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {

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
        
        //Loading all the module specific data and assigning it to the DataManager
        DataManager.moduleJSON = this.cache.getJSON('moduledata');
        DataManager.PopulateConversationEntries();

        this.startGame();

	},

	update: function () {

	},

	startGame: function (pointer) {

		//this.music.stop();

		this.game.state.start('MiniGame1');

	},

    goFullScreen: function(){
        this.game.stage.scale.startFullScreen();

        this.game.stage.scale.refresh();
    }

};
