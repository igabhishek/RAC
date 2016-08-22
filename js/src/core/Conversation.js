
BasicGame.Conversation = function (game) {

	this.character1 = null;
	this.character2 = null;
    
	this.character1Name = null;
	this.character2Name = null;
    
    this.exitButton = null;

};

BasicGame.Conversation.prototype = {
    
    init: function(character1Name, character2Name) 
    {   
        this.character1Name = character1Name;
        this.character2Name = character2Name;
    },
    
    create: function () {
        
        this.character1 = this.game.add.sprite(Math.floor(this.game.width * 0.2), Math.floor(this.game.height * 0.6), this.character1Name);
        this.character2 = this.game.add.sprite(Math.floor(this.game.width * 0.8), Math.floor(this.game.height * 0.6), this.character2Name);
        
        this.character1.anchor.setTo(0.5, 0.5);
        this.character2.anchor.setTo(0.5, 0.5);
        
        this.character1.scale.setTo(-1.5, 1.5);
        this.character2.scale.setTo(1.5, 1.5);
        
        this.exitButton = this.game.add.button(Math.floor(this.game.width * 0.8), Math.floor(this.game.height * 0.9), 'playButton', this.switchToGameState, this, 2, 1, 0);
	},
    
    switchToGameState: function() {
        
        this.game.state.start('Game', true, false);   
        
    }
    
};