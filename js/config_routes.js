app.config(function($routeProvider) {
    $routeProvider
    .when("/1", {
        template : `<div ng-controller="q1 as q">
                        <div class="progres_bar">
                            <span></span>
                        </div>
                        <span class="question_no">1</span>
                            <p class="the_question">{{q.getQuestion}}</p>
                            <div class="answers">
                                <input type="radio"  ng-model="q.value" value="LMC1300" ng-change='q.getValue()'> LMC1300<br>
                                <input type="radio"  ng-model="q.value" value="Andromeda" ng-change='q.getValue()'> Andromeda<br>
                                <input type="radio"  ng-model="q.value" value="Milky Way" ng-change='q.getValue()'> Milky Way<br>  
                            </div>
                        <a href="#!2" class="first_next_button">next  &#9658;</a>
                    </div>`,
        controller : "q1"
    })
    .when("/2", {
        template : `<div ng-controller="q2 as q">
                        <div class="progres_bar">
                            <span></span><span></span>
                        </div>        
                        <span class="question_no">2</span>
                        <p class="the_question">{{q.getQuestion}}</p>
                        <div class="answers">
                            <input type="radio" ng-model="q.value" value="859,000km" ng-change='q.getValue()'> 859,000km<br>
                            <input type="radio" ng-model="q.value" value="384,400km" ng-change='q.getValue()'> 384,400km<br>
                            <input type="radio" ng-model="q.value" value="453,000km" ng-change='q.getValue()'> 453,000km<br> 
                        </div>  
                        <div class="nav">
                            <a href="#!1" class="next_button">&#9668;  previous</a><a href="#!3" class="next_button">next  &#9658;</a>
                         </div>   
                    </div>`,
        controller : "q2"
    })
    .when("/3", {
        template : `<div ng-controller="q3 as q">
                        <div class="progres_bar">
                            <span></span><span></span><span></span>
                        </div>        
                        <span class="question_no">3</span>
                        <p class="the_question">{{q.getQuestion}}</p>
                        <div class="answers">
                            <input type="radio" ng-model="q.value" value="earth" ng-change='q.getValue()'> Earth<br>
                            <input type="radio" ng-model="q.value" value="mars" ng-change='q.getValue()'> Mars<br>
                            <input type="radio" ng-model="q.value" value="venus" ng-change='q.getValue()'> Venus<br>
                        </div>    
                        <div class="nav">                
                            <a href="#!2" class="next_button">&#9668;  previous</a><a href="#!4" class="next_button">next  &#9658;</a>
                        </div>
                    </div>`,
       controller : "q3"
    })
    .when("/4", {
        template : `<div ng-controller="q4 as q">
                      <div class="progres_bar">
                           <span></span><span></span><span></span><span></span>
                       </div>
                       <span class="question_no">4</span>
                       <p class="the_question">{{q.getQuestion}}</p>
                       <div class="answers">
                            <input type="radio" ng-model="q.value" value="5,500 degrees C" ng-change='q.getValue()'> 5,500 degrees C<br>
                            <input type="radio" ng-model="q.value" value="10,500 degrees C" ng-change='q.getValue()'> 10,500 degrees C<br>
                            <input type="radio" ng-model="q.value" value="12,500 degrees C" ng-change='q.getValue()'> 12,500 degrees C<br>
                       </div>  
                        <div class="nav">               
                            <a href="#!3" class="next_button">&#9668;  previous</a><a href="#!5" class="next_button">next  &#9658;</a>
                       </div>
                    </div>`,
       controller : "q4"
    })
    .when("/5", {
        template : `<div ng-controller="q5 as q">
                       <div class="progres_bar">
                           <span></span><span></span><span></span><span></span><span></span>
                       </div>        
                       <span class="question_no">5</span>
                       <p class="the_question">{{q.getQuestion}}</p>
                        <div class="answers">
                            <input type="radio" ng-model="q.value" value="saturn" ng-change='q.getValue()'> Saturn<br>
                            <input type="radio" ng-model="q.value" value="jupiter" ng-change='q.getValue()'> Jupiter<br>
                            <input type="radio" ng-model="q.value" value="pluto" ng-change='q.getValue()'> Pluto<br>
                        </div>
                        <div class="nav">
                            <a href="#!4" class="next_button">&#9668;  previous</a><button ng-click="ctrl.submit()" class="submit_button">submit</button>
                        </div>    
                     </div>`,
       controller : "q5"
    })    
    .otherwise({
        template : `<a href="#!1" class="star_quiz_button">Start the quiz</a>`
    });
});