﻿
//Not using the below code. Using Routes instead

function PartialController($scope) {

    $scope.showAlmax = function () {
        $scope.partialURL = 'partials/almax.html';
    };

    $scope.showMetro = function () {
        $scope.partialURL = 'partials/metro.html';
    };

}