app.service('DataService', function() {
    this.questions= [
                      {Q1: "what's the name of our galaxy?"},
                      {Q2: "what's the distance from the earth to the moon?"},
                      {Q3: "which planet is closest to the sun?"},
                      {Q4: "what's the temperature of the sun's surface?"},
                      {Q4: "what's the biggest planet in the solar system?"}
                    ]
                    
    this.answers = [];
    
    this.rightAnswers = [];
    
    this.currectAnswers = ["Milky Way",
                           "384,400km",
                           "venus",
                           "5,500 degrees C",
                           "jupiter"]

    this.calculate = function(){
        var pointsPerQ = 100/this.answers.length;
        this.score = 0;
        for(var i = 0; i < this.answers.length; i++){
             if(this.answers[i] === this.currectAnswers[i]){
                 this.score += pointsPerQ;
                 this.rightAnswers.push(this.answers[i]);
             }     
        }
        console.log(this.score);
        console.log(this.rightAnswers);
    }
})