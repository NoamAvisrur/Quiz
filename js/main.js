var app = angular.module("myApp", []);

app.controller('mainCtrl', function(DataService, $timeout, ProgressBar){
    
    this.title = 'The Big Space Quiz';
    
    this.data = DataService.data;
    
    this.show = false;
    
    this.answers = []
    
    this.i = 0;
    
    this.nav = function(mode){
        if(mode === 'next'){this.i += 1;};
        if(mode === 'prev'){this.i -= 1};
    }
    
    this.startQuiz = function(){
        ProgressBar.startBar();
        this.show = true;
        document.querySelector('.msg').remove();
        this.timeout = $timeout(function () {
            this.calculate();
            this.show = false;
        }.bind(this), 45000);
    }
    
    this.getValue = function($index){
        DataService.answers[this.i] = this.answers[this.i];
    }
    
    this.submit = function(){
        $timeout.cancel(this.timeout);
        this.calculate();
        this.show = false;
    }
    
    this.calculate = function(){
        this.points = 100/this.data.length;
        this.score = 0;
         for (var i = 0; i < this.data.length; i++){
             if(this.data[i].A === DataService.answers[i]){
                 this.score += this.points;
                 this.rightAnswers.push(DataService.answers[i]);
             }     
        }
    }
    
    this.rightAnswers = [];
    
});

