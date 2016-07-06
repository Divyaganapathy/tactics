angular.module('tactics.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $localStorage) {

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



  $scope.strengthList = [
    { text: "1. Does your company have technological advantages?", checked: false },
    { text: "2. Do you perform better than your competitiors?", checked: false },
    { text: "3. Are you strategically well placed within your sector?", checked: false },
    { text: "4. Do you have features that your customers perceive as your strength?", checked: false },
    { text: "5. Does your company have factors that faciliate possible sales?", checked: false }
  ];

  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };

  $scope.pushNotification = { checked: true };
  $scope.checkedCount=function(){return $scope.data.filter(function(person){return person.checked;}).length;}



  $scope.weaknessList = [
    { text: "1. Are the activities performed by your company weaker than required?", checked: false },
    { text: "2. Do you waste your resources which are your strength?", checked: false },
    { text: "3. Does your company have factors than customer perceive as weakness?", checked: false },
    { text: "4. Do you think your product/service can be improved?", checked: false },
    { text: "5. Does you perform unneccessary activites that could be avoided?", checked: false }
  ];

  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };

  $scope.pushNotification = { checked: true };
  $scope.checkedCount=function(){return $scope.data.filter(function(person){return person.checked;}).length;}


  $scope.opportunitiesList = [
    { text: "1. Does your company have good business opportunities?", checked: false },
    { text: "2. Are there needs that your clients have but are not offered by your competitors?", checked: false },
    { text: "3. Is there scope for technological development in the market?", checked: false },
    { text: "4. Is there a possibility for political or legal changes in the market?", checked: false },
    { text: "5. Is there scope for other changes that will favour your range of products?", checked: false }
  ];

  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };

  $scope.pushNotification = { checked: true };
  $scope.checkedCount=function(){return $scope.data.filter(function(person){return person.checked;}).length;}



  $scope.threatsList = [
    { text: "1. Are there tendencies that could menace the exitence of your company/product/services?", checked: false },
    { text: "2. Are your competitors improving the products/services better than you?", checked: false },
    { text: "3. Do you face obstacles in the functioning of your company?", checked: false },
    { text: "4. Does technological changes threaten your company's position?", checked: false },
    { text: "5. Do you face issues regarding capital resources?", checked: false }
  ];

  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };

  $scope.pushNotification = { checked: true };
  $scope.checkedCount=function(){return $scope.data.filter(function(person){return person.checked;}).length;}

  $scope.labels3 =["Strength","Weakness", "Opportunities", "Threats"];
  $scope.data3 = [15,12,23,11,66];



  $scope.productList = [
    { text: "1. Does your company produce variety of products in order to meet customer satisfaction?", checked: false },
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
  $scope.checkedCount=function(){return $scope.data.filter(function(person){return person.checked;}).length;}


  $scope.priceList = [
    { text: "1. Do you allow for discounts of your products?", checked: false },
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

  $scope.promotionList = [
    { text: "1. Do the people know your products based on promotional strategy?", checked: false },
    { text: "2. Does your organization apply sales promotion as one of the promotion strategies?", checked: false },
    { text: "3. Does your organization apply advertising promotion as one of the promotion strategies?", checked: false },
    { text: "4. Does your organization apply selling promotion as one of the promotion strategies?", checked: false },
    { text: "5. Does your promotion influence the rate of purchase positively?", checked: false },
  ];

  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };

  $scope.pushNotification = { checked: true };

  $scope.placeList = [
    { text: "1. Do your products get to target the customers?", checked: false },
    { text: "2. Does the location of products aid accessibility?", checked: false },
    { text: "3. Is channel coverage effective?", checked: false },
    { text: "4. Is transportation effective?", checked: false },
  ];

  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };

  $scope.pushNotification = { checked: true };

  $scope.data = {
    'irent': 0,
    'computer': 0,
    'tools': 0,
    'offsupp': 0,
    'preoperating': 0,
    'infraresult': 0,
    'legal': 0,
    'insurance': 0,
    'licence': 0,
    'franchisee': 0,
    'operating': 0,
    'iresult': 0,
    'logoDesign': 0,
    'websiteDesign': 0,
    'payroll': 0,
    'training': 0,
    'others': 0,
    'oresult': 0,
    'rent': 0,
    'equip': 0,
    'inventory': 0,
    'supplies': 0,
    'utilities': 0,
    'infrasum': 0,
    'mlegal': 0,
    'shipping': 0,
    'business': 0,
    'mfranchisee': 0,
    'moperating': 0,
    'legalsum': 0,
    'salary': 0,
    'mpayroll': 0,
    'loan': 0,
    'taxes': 0,
    'health': 0,
    'taxsum': 0,
    'adv': 0,
    'tele': 0,
    'internet': 0,
    'webhost': 0,
    'otherss': 0,
    'commsum': 0,
    'fixed': 0,
    'varcost': 0,
    'unitprice': 0,
    'breakeven': 0,
    'target': 0,
    'budget': 0,
    'dos': 0,
    'dof': 0,
    'target1': 0,
    'budget1': 0,
    'dos1': 0,
    'dof1': 0,
    'target2': 0,
    'budget2': 0,
    'dos2': 0,
    'dof2': 0,
    'target3': 0,
    'budget3': 0,
    'dos3': 0,
    'dof3': 0
  };

  $scope.infraresult = function() {
    $scope.data.infraresult = $scope.data.irent + $scope.data.computer + $scope.data.tools + $scope.data.offsupp + $scope.data.preoperating;
    return $scope.data.infraresult;
  };


  $scope.initialresult = function() {
    $scope.data.iresult = $scope.data.legal + $scope.data.insurance + $scope.data.licence + $scope.data.franchisee + $scope.data.operating;
    return $scope.data.iresult;
  };

  $scope.otherresult = function() {
    $scope.data.oresult = $scope.data.logoDesign + $scope.data.websiteDesign + $scope.data.payroll + $scope.data.training + $scope.data.others;
    return $scope.data.oresult;
  };


  $scope.infrasum = function() {
     $scope.data.infrasum = $scope.data.rent + $scope.data.equip + $scope.data.inventory + $scope.data.supplies + $scope.data.utilities;
     return $scope.data.infrasum;
   };


   $scope.legalsum = function() {
     $scope.data.legalsum = $scope.data.mlegal + $scope.data.shipping + $scope.data.business + $scope.data.mfranchisee + $scope.data.moperating;
     return $scope.data.legalsum;
   };

   $scope.taxsum = function() {
     $scope.data.taxsum = $scope.data.salary + $scope.data.mpayroll + $scope.data.loan + $scope.data.taxes + $scope.data.health;
     return $scope.data.taxsum;
   };

   $scope.commsum = function() {
     $scope.data.commsum = $scope.data.adv + $scope.data.tele + $scope.data.internet + $scope.data.webhost + $scope.data.otherss;
     return $scope.data.commsum;
   };

   $scope.breakeven = function() {
     $scope.data.breakeven = $scope.data.fixed / ($scope.data.unitprice - $scope.data.varcost);
     return $scope.data.breakeven;
   };
   //Store an object
      $scope.storeObject = function() {
        if(typeof(Storage) != "undefined") {

            $localStorage.data =  $scope.data;

            alert("Data stored!");
        } else {
            alert("LocalStorage not supported!");
        }
      };
      //Read an object
      if($localStorage.data !== undefined) {
        $scope.data = $localStorage.data;
      }

   $scope.labels =["Infrastructure","Initial Expenses", "Other Expenses", "Total"];
   $scope.data1 = [28,67,36,88];

   $scope.labels1 =["Infrastructure Expenses","Business and Legal Expenses", "Salary and Taxes","Communication Expenses", "Total Monthly Expenses"];
   $scope.data2 = [15,12,23,11,66];


  });
