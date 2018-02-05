angular.module("triviaTrends").service("triviaService", function($http) {
  this.getTriviaQuestions = () => {
    return $http.get(
      "https://practiceapi.devmountain.com/api/trivia/questions/"
    );
  };

  this.getDifficulty = num => {
    if (num) {
      return $http.get(
        `https://practiceapi.devmountain.com/api/trivia/questions/difficulty/${num}`
      );
    } else {
      return $http.get(
        "https://practiceapi.devmountain.com/api/trivia/questions/"
      );
    }
  };
});
