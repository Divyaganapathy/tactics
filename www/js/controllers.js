angular.module('tactics.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };



  $scope.productList = [
    { text: "1. Does your company produce variety of products in order to meet customer satisfaction?", checked: true },
    { text: "2. Does your brand name influence company sales?", checked: false },
    { text: "3. Do your products meet customer's requirement?", checked: false },
    { text: "4. Do customers complain about quality of products?", checked: false },
    { text: "5. Is the packaging effective?", checked: false },
    { text: "6. Does your company provide warranty for your products sold?", checked: false }
  ];

  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };

  $scope.pushNotification = { checked: true };


  $scope.priceList = [
    { text: "1. Do you allow for discounts of your products?", checked: true },
    { text: "2. Are the prices of the products appropriate?", checked: false },
    { text: "3. Does your pricing decisions allow for payment period?", checked: false },
    { text: "4. Does your pricing strategy give room for large customer bases?", checked: false },
    { text: "5. Does applying strategies to price leads to increase in sales, thereby contibuting to achievement of objectives?", checked: false },
    { text: "6. Does your pricing decisions allow for credit terms?", checked: false }
  ];

  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };

  $scope.pushNotification = { checked: true };

});

/*  $scope.addListItem= function(){
    $scope.array.unshift()

  }*/
