app.controller('q1', function(DataService){
    this.questions = DataService.questions;
 
    this.getQuestion = DataService.questions[0].Q1;

    this.getValue = function(){
        DataService.answers[0] = this.value
        console.log(DataService.answers);
    }

})

app.controller('q2', function(DataService){

    this.getQuestion = DataService.questions[1].Q2;

    this.getValue = function(){
        DataService.answers[1] = this.value
        console.log(DataService.answers);
    }

})

app.controller('q3', function(DataService){

    this.getQuestion = DataService.questions[2].Q3;

    this.getValue = function(){
        DataService.answers[2]= this.value
        console.log(DataService.answers);
    }

})

app.controller('q4', function(DataService){

    this.getQuestion = DataService.questions[3].Q4;

    this.getValue = function(){
        DataService.answers[3]= this.value
        console.log(DataService.answers);
    }

})

app.controller('q5', function(DataService){

    this.getQuestion = DataService.questions[4].Q4;

    this.getValue = function(){
        DataService.answers[4] = this.value
        console.log(DataService.answers);
    }

})