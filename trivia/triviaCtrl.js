angular
  .module("triviaTrends")
  .controller("triviaCtrl", function($scope, triviaService) {
    triviaService.getTriviaQuestions().then(function(response) {
      $scope.triviaQuestions = response.data;
      console.log(response.data);
    });

    $scope.getDifficulty = num =>
      triviaService.getDifficulty(num).then(function(response) {
        $scope.triviaQuestions = response.data;
      });

    // $scope.checkAnswer = (questionId, chosenAnswer) => {
    //     if (chos)
    // };

    $scope.animalSearch = "";
  });
