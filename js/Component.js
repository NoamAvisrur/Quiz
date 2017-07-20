app.component('resultComponent', {
  template: `<div class="showResults" ng-show="result.points">
                <h1>results:</h1>
                <span class="score">Your Score: <span>{{result.score | number:0}}</span></span>
                <span>you answersed {{result.rightanswers.length}} out of {{result.answers.length}} currect answers</span>
            </div> `,
  bindings: {
       score: "<",
       points: "<",
       rightanswers: "<",
       answers: "<"
  },
    controller: function($element) {

  },
  controllerAs: 'result'
});