var popup;
var tween = null;
var continueButton;
var l_continueBtnTxt;
var l_feedbackTxt

BasicGame.ResultPopup = function (game) {
//    this.next = null;
};

BasicGame.ResultPopup.prototype = {
    preload: function () {


    },

    create: function () {
        
       //Creation Of Popup
        popup = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'sprite2',"ELB_blue-bg.png");
        popup.anchor.set(0.5);
        popup.scale.setTo(0.5);

        //Creation Of Continue button
        continueButton = this.add.button(this.game.world.centerX, this.game.world.height * 0.80, 'sprite1',this.closeWindow,this,"ELB_dropmenu-btn_hover.png","ELB_dropmenu-btn_idle.png","ELB_dropmenu-btn_down.png");
        continueButton.inputEnabled = true;
        continueButton.anchor.set(0.5);
        continueButton.scale.setTo(0.3);
        
        //Creation Of Continue button text
        l_continueBtnTxt = this.add.text(this.game.world.centerX,this.game.world.height * 0.80
        ,"Continue", m_questionTextStyle);
        l_continueBtnTxt.anchor.set(0.5);
        
        //Creation Of feedback text
        l_feedbackTxt = this.add.text(this.game.world.centerX,this.game.world.centerY,m_FeedbackTxt[m_FeedbackTxtIndex], m_questionTextStyle);
        l_feedbackTxt.anchor.set(0.5);
    },
        

    update: function () {


    },
    
    closeWindow : function() {  //destroying all references
        popup.destroy();
        popup = null;
        continueButton.destroy();
        continueButton = null;
        l_continueBtnTxt.destroy();
        l_continueBtnTxt = null;
        l_feedbackTxt.destroy();
        l_feedbackTxt = null;
    }
};