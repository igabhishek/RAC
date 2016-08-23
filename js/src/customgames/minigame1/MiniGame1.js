

var containerTextStyle = {font: "40px Arial", fontWeight: "bold", align: "center", fill: "white"};
var m_SelectedOptions = [];
var m_submitBtn;

var MiniGame1QuestionsInfo =
        [{
                "questionText": "Select the reason why cs prefers shopping at RAC",
                items: [{
                        "option": "Select the reason why cs prefers shopping at RAC",
                    },{
                        "option": "Select the reason why cs prefers shopping at RAC",
                    },{
                        "option": "Select the reason why cs prefers shopping at RACoption 3",
                    },{
                        "option": "Select thes shopping at RACoption 4",
                    }
                ]
            },
            {
                "questionText": "R A C Question 2",
                items: [{
                        "option": "option 1",
                    },{
                        "option": "option 2",
                    },{
                        "option": "option 3",
                    },{
                        "option": "option 4",
                    }
                ]
            },
            {
                "questionText": "R A C Question 3",
                items: [{
                        "option": "option 1",
                    },{
                        "option": "option 2",
                    },{
                        "option": "option 3",
                    },{
                        "option": "option 4",
                    }
                ]
            }
        ];

BasicGame.MiniGame1 = function (game) {
//    this.next = null;
};

BasicGame.MiniGame1.prototype = {
    preload: function () {


    },

    create: function () {
        
        //creation of title BG
        var l_titleBG = this.add.sprite(this.game.world.centerX, this.game.world.height * 0.1 ,'sprite2',"ELB_title-box_long.png");
        l_titleBG.anchor.set(0.5);
        l_titleBG.scale.setTo(0.5);
        
        //creation of title text
        var l_titleTxt = this.add.text(this.game.world.centerX, this.game.world.height * 0.1,"R-A-C TRIVIA 1",containerTextStyle);
        l_titleTxt.anchor.set(0.5);
        l_titleTxt.scale.setTo(0.5);
        
        //creation of question BG
        var l_questionBG = this.add.sprite(this.game.world.centerX,this.game.world.height * 0.45,'sprite2',"ELB_blue-bg.png");
        l_questionBG.anchor.set(0.5);
        l_questionBG.scale.setTo(0.6,0.7);
//        this.l_questionBG.input.enableDrag();
        
        //creation of submit button
        m_submitBtn = this.add.button(this.game.world.centerX, this.game.world.height * 0.85, 'sprite1', this.OnClickSubmitBtn, this, "ELB_continue-btn_hover.png", "ELB_continue-btn_idle.png", "ELB_continue-btn_down.png");
        m_submitBtn.anchor.set(0.5);
        m_submitBtn.scale.setTo(0.5);
        m_submitBtn.alpha = 0;
        
        //creation of question text
        var l_questionIndex = 0;
        var l_optionIndex = 0;
        var l_question = MiniGame1QuestionsInfo[l_questionIndex];
        var l_questionTxt = l_question.questionText;
        var l_questionTxtRef = this.add.text(this.game.world.centerX,this.game.world.height * 0.2,l_questionTxt,containerTextStyle); 
        l_questionTxtRef.anchor.set(0.5);
        l_questionTxtRef.scale.setTo(0.5);

        //creation of option buttons
        for(l_optionIndex = 0 ; l_optionIndex < l_question.items.length ; l_optionIndex++){  
            var l_optionBtn = this.add.button(this.game.world.centerX,this.game.world.height * 0.3 + (l_optionIndex * this.game.world.height * 0.10), 'sprite1', this.OnClickOptionBtn,this, "ELB_dropmenu-btn_hover.png", "ELB_dropmenu-btn_idle.png", "ELB_dropmenu-btn_down.png", "ELB_dropmenu-btn_down.png");
            l_optionBtn.name = l_optionIndex;
            l_optionBtn.value = 1;
            l_optionBtn.onInputUp.add(this.up);
            l_optionBtn.scale.setTo(1.2,0.3);
            l_optionBtn.anchor.set(0.5);
            
            //creation of option buttons text
            var l_optionTxt = this.add.text(this.game.world.centerX,this.game.world.height * 0.3 + (l_optionIndex * this.game.world.height * 0.10),l_question.items[l_optionIndex].option, containerTextStyle ); 
            l_optionTxt.scale.setTo(0.5);
            l_optionTxt.anchor.set(0.5);
        }

    },

     update: function () {


    },

    
    up: function (button) {
        
        if( button.value == false){
            
           button._onOutFrame = "ELB_dropmenu-btn_down.png";
            m_SelectedOptions.push(button.name);
            m_submitBtn.alpha = 1;
        }
        else {
            
            button._onOutFrame = "ELB_dropmenu-btn_idle.png";
            m_SelectedOptions.pop(button.name);
            if(m_SelectedOptions.length == 0){
                 m_submitBtn.alpha = 0;   
            }
        }
    },

    OnClickOptionBtn: function (button) {
        
        button.value =! button.value;
        console.log (button.value);
    },

    OnClickSubmitBtn: function (button) {
        
        var index;
        for(index = 0 ; index < m_SelectedOptions.length ; index++)
        {
            console.log("option selected :" + m_SelectedOptions[index]);
        }
    },

};
