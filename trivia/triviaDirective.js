angular.module("triviaTrends").directive("triviaDirective", function() {
  return {
    templateUrl: "./question.html",
    scope: {
      question: "="
    },
    controller: function($scope) {
      $scope.selectAnswer = num => {
        $scope.selectedAnswer = num;
        if ($scope.selectedAnswer == $scope.question.correct_answer) {
          $scope.correct = true;
        }
      };
    },
    link: function(scope, elem, attrs) {
      if (scope.category.includes("dark")) {
        elem.prepend("I hate dark");
      }
    }
  };
});
