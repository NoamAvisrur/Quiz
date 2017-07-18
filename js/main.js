var app = angular.module("myApp", []);

app.controller('mainCtrl', function(DataService){
    
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
        this.show = true;
        document.querySelector('.msg').remove();
    }
    
    this.getValue = function($index){
        DataService.answers[this.i] = this.answers[this.i];
        console.log(DataService.answers);
        console.log(this.answers);
    }
    
    this.submit = function(){
        this.calculate();
        this.show = false;
    }
    
    this.calculate = function(){
        var pointsPerQ = 100/this.data.length;
        console.log(pointsPerQ);
        this.score = 0;
         for (var i = 0; i < this.data.length; i++){
             console.log (this.data[i].A);
             console.log(DataService.answers[i]);
             if(this.data[i].A === DataService.answers[i]){
                 this.score += pointsPerQ;
                 this.rightAnswers.push(DataService.answers[i]);
             }     
        }
        console.log(this.score);
        console.log(this.rightAnswers);
    }
    
    this.rightAnswers = [];
    
})

app.component('resultComponent', {
  template: `<div class="showResults" ng-show="result.score">
                <h1>results:</h1>
                <span class="score">Your Score: <span>{{result.score | number:0}}</span></span>
                <span>you answersed {{result.rightanswers.length}} out of {{result.answers.length}} currect answers</span>
            </div> `,
  bindings: {
       score: "<",
       rightanswers: "<",
       answers: "<"
  },
    controller: function($element) {

  },
  controllerAs: 'result'
});
