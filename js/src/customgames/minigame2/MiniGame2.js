var m_characterBG;
var m_questionTextStyle = {font: "20px Arial", fontWeight: "bold", align: "center", fill: "white"};
var m_optionTextStyle = {font: "30px Arial", fontWeight: "bold", align: "center", fill: "white"};
var bounds;                      //defining bounds for drag 
var m_OptionPosX = [];           //storing options X position
var m_OptionPosY = [];           //storing options Y position
var m_SelectedOptions = [];      //storing selected options index
var m_CorrectOptions = [];       //storing correct options index
var m_IncorrectOptions = [];     //storing incorrect options index
var m_submitBtn;                 //storing reference of submit button

var QuestionsInfo =
        [{
                "questionText": "Select the reason why customer prefers shopping at RAC",
                options: [{
                        "option": "Being Accepted",
                        "Result": "Correct",
                    },{
                        "option": "Staff doesn't \nrecognize",
                        "Result": "Correct",
                    },{
                        "option": "Being able \nto buy",
                        "Result": "Wrong",
                    },{
                        "option": "Getting products \nsooner",
                        "Result": "Wrong",
                    },{
                        "option": "Feeling welcome",
                        "Result": "Correct",
                    },{
                        "option": "Scrutinized \nbefore",
                        "Result": "Correct",
                    },{
                        "option": "staff only \nhelps",
                        "Result": "Correct",
                    },{
                        "option": "Friendly \nrelations",
                        "Result": "Wrong",
                    }
                ]
            }
        ];
var m_FeedbackTxt = ["Excellent! All of these are correct","Oops! All of these are incorrect","Okay! only few of these are correct"];
var m_FeedbackTxtIndex;     //storing feedback text index

BasicGame.MiniGame2 = function (game) {
//    this.next = null;
};

BasicGame.MiniGame2.prototype = {
    preload: function () {

    },

    create: function () {
        
        //defining bounds for drag elements
        bounds = new Phaser.Rectangle(0, 0, this.game.world.width, this.game.world.height);
        
        //creation of question BG
        var l_questionBG = this.add.sprite(this.game.world.centerX,this.game.world.centerY * 0.25, 'sprite2',"ELB_blue-bg.png");
        l_questionBG.scale.setTo(0.5,0.15);
        l_questionBG.anchor.set(0.5);
        
        //creation of submit button
        m_submitBtn = this.add.button(this.game.world.width * 0.90, this.game.world.height * 0.90,'sprite1', this.OnClickSubmitBtn, this, "ELB_continue-btn_hover.png", "ELB_continue-btn_idle.png", "ELB_continue-btn_down.png");
        m_submitBtn.alpha = 0;
        m_submitBtn.anchor.set(0.5);
        m_submitBtn.scale.setTo(0.5);
        
        var l_questionIndex = 0;
        var l_heightIndex = 0;
        var l_question = QuestionsInfo[l_questionIndex];
        var l_questionTxt = l_question.questionText;
        //creation of question text
        var l_questionRef = this.add.text(this.game.world.centerX,this.game.world.centerY * 0.25,l_questionTxt,
        m_questionTextStyle);
        l_questionRef.anchor.set(0.5);
        
        
        for(l_optionIndex = 0 ; l_optionIndex < l_question.options.length ; l_optionIndex++){
            var l_posX;
            var l_posY;
            var l_textPosX;
            if(l_optionIndex >= 4){  //for placing last four options on right side
                
                l_posX = this.game.world.width * 0.85;
                l_textPosX = l_posX * 0.05;
                
                if(l_optionIndex == 4){
                     l_heightIndex = 0;
                } 
            }
            else{  //for placing first four options on left side
                
                l_posX = this.game.world.width * 0.15;
                l_textPosX = l_posX * 0.10;
            }
            
            l_posY = (this.game.world.height * 0.3) + (l_heightIndex * this.game.world.height * 0.15);
            
            //creation of option button
            var l_option = this.add.button(l_posX, l_posY ,'sprite2',this.OnClickOptionBtn,this,"","ELB_blue-bg.png","");
            m_OptionPosX.push(l_posX);
            m_OptionPosY.push(l_posY);
            l_option.name = l_optionIndex;
            l_option.anchor.set(0.5);
            l_option.scale.setTo(0.15,0.1);
            l_option.inputEnabled = true;
            l_option.input.enableDrag(false,true);
            l_option.events.onDragStart.add(this.onDragStart);
            l_option.events.onDragStop.add(this.onDragStop);
            l_option.input.boundsRect = bounds;
            
            //creation on option text
            var l_optionTxt = this.add.text(l_textPosX, l_posY * 0.1,l_question.options[l_optionIndex].option, m_optionTextStyle );
            l_optionTxt.scale.setTo(5);
            l_optionTxt.anchor.set(0.5);
            l_option.addChild(l_optionTxt);
            
            //storing coorect and incorrect option indexes for result purpose
            if(l_question.options[l_optionIndex].Result == "Correct"){
                
                m_CorrectOptions.push(l_optionIndex);
            }
            else{
                
                m_IncorrectOptions.push(l_optionIndex);
            }
            
            l_heightIndex++;
        }

        //creation of character BG
        m_characterBG = this.add.sprite(this.game.world.centerX,this.game.world.height * 0.75,'sprite2',"ELB_blue-bg.png");
        m_characterBG.scale.setTo(0.2,0.4);
        m_characterBG.anchor.set(0.5);
        
    },

     update: function () {

    },

    onDragStart :function(sprite, pointer) {

    },

    onDragStop : function(sprite, pointer) {
         if (sprite.overlap(m_characterBG)) 
         { 
            m_submitBtn.alpha = 1;
            m_SelectedOptions.push(sprite.name);
            sprite.destroy();
            sprite = null;
         }
         else
         {
            sprite.reset(m_OptionPosX[sprite.name], m_OptionPosY[sprite.name]);
         }
    },

    OnClickOptionBtn: function (button) {

    },

    OnClickSubmitBtn: function (button) {
        
        var l_index;
        var l_Correct = false;
        var l_Incorrect = false;
        for(l_index = 0 ; l_index < m_SelectedOptions.length ; l_index++)
        {
            if(m_CorrectOptions.includes(m_SelectedOptions[l_index]))
            {
                l_Correct = true;
            }
            else if(m_IncorrectOptions.includes(m_SelectedOptions[l_index]))
            {
                l_Incorrect = true;
            }
        }
        if(l_Correct == true && l_Incorrect == false)
        {
            if(m_SelectedOptions.length == m_CorrectOptions.length)
                {
                    m_FeedbackTxtIndex = 0;
                }
            else{
                m_FeedbackTxtIndex = 2;
            }
            
        }
        else if(l_Correct == false && l_Incorrect == true){
            
            if(m_SelectedOptions.length == m_IncorrectOptions.length)
                {
                    m_FeedbackTxtIndex = 1;
                }
            else{
                m_FeedbackTxtIndex = 2;
            }
        }
        else
        {
            m_FeedbackTxtIndex = 2;
        }
        
        //ask abhi about deletion of miniGame2 objects
        this.state.start('ResultPopup', true);
    },

};