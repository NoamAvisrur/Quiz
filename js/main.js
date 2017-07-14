var app = angular.module("myApp", ["ngRoute"]);

app.controller('mainCtrl', function(DataService){
    this.title = 'The Big Space Quiz';
        
    this.show = false;
    
    this.checkArr = true;
        
    this.submit = function(){
        this.checkArr = true;
        for (var i = 0; i < DataService.answers.length; i++){
            if(typeof DataService.answers[i] == 'undefined' || DataService.answers.length !== 5){
                this.checkArr = false;
                break;
            }  
        }
        if(this.checkArr) {
            if(document.querySelector('.notice')){document}   
            DataService.calculate();
            this.score = DataService.score;
            this.show = true;
            document.querySelector('[ng-view]').innerHTML = ""; 
            this.answersLength = DataService.answers.length
            this.currectAnswersLength = DataService.rightAnswers.length;
        }else{
            console.log('didnt finish');
        } 
    }
    
    this.resetQuiz = function(){
        DataService.answers = [];
        DataService.rightAnswers = [];
        this.show = false;
        DataService.score = 0;
    }
})

