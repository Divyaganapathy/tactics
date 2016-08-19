angular.module('tactics.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $localStorage, $filter) {

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
    'dof3': 0,
    'totalini': 0,
    'totalmon': 0,
    'exjanuary': 0,
    'exfebruary': 0,
    'exmarch': 0,
    'exapril': 0,
    'exmay': 0,
    'exjune': 0,
    'exjuly': 0,
    'exaugust': 0,
    'exseptember': 0,
    'exoctober': 0,
    'exnovember': 0,
    'exdecember': 0,
    'acjanuary': 0,
    'acfebruary': 0,
    'acmarch': 0,
    'acapril': 0,
    'acmay': 0,
    'acjune': 0,
    'acjuly': 0,
    'acaugust': 0,
    'acseptember': 0,
    'acoctober': 0,
    'acnovember': 0,
    'acdecember': 0,
    'exweek1': 0,
    'exweek2': 0,
    'exweek3': 0,
    'exweek4': 0,
    'acweek1': 0,
    'acweek2': 0,
    'acweek3': 0,
    'acweek4': 0
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

  $scope.totalini = function() {
    $scope.data.totalini = $scope.data.infraresult + $scope.data.iresult + $scope.data.oresult;
    return $scope.data.totalini;
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
   $scope.totalmon = function() {
     $scope.data.totalmon = $scope.data.infrasum +$scope.data.legalsum + $scope.data.taxsum + $scope.data.commsum;
     return $scope.data.totalmon;
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







   $scope.labels =["Infrastructure","Initial Expenses", "Other Expenses","Total"];
   $scope.data5 =[$scope.data.infraresult,$scope.data.iresult,$scope.data.oresult,$scope.data.infraresult + $scope.data.iresult + $scope.data.oresult];
  //$scope.data1 = [28,67,36,88];
$scope.reload = function() {
  window.location.reload();
}

   $scope.labels1 =["Infrastructure Expenses","Business and Legal Expenses", "Salary and Taxes","Communication Expenses", "Total Monthly Expenses"];
 $scope.data6 =[$scope.data.infrasum,$scope.data.legalsum,$scope.data.taxsum,$scope.data.commsum,$scope.data.infrasum + $scope.data.legalsum + $scope.data.taxsum + $scope.data.commsum];
  // $scope.data6 = [15,12,23,11,66];

   $scope.labels2 =["Strength","Weakness", "Opportunities","Threats"];
   $scope.data3 = [15,12,23,11];

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

   $scope.$storage =  $localStorage.$default({
             swot: {},
             mix: {}
           });
 $scope.checkcount=function(){$scope.cc=$filter('filter')($scope.strengthList,{checked:true})};
 $scope.strengthFilter = function () {
       $scope.fav = $filter('filter')($scope.$storage.strengthList, {checked: true});
}
$scope.weaknessFilter = function () {
      $scope.fav = $filter('filter')($scope.$storage.weaknessList, {checked: true});
}
$scope.opportunitiesFilter = function () {
      $scope.fav = $filter('filter')($scope.$storage.opportunitiesList, {checked: true});
}
$scope.threatsFilter = function () {
      $scope.fav = $filter('filter')($scope.$storage.threatsList, {checked: true});
}
$scope.productFilter = function () {
      $scope.fav = $filter('filter')($scope.$storage.productList, {checked: true});
}
$scope.priceFilter = function () {
      $scope.fav = $filter('filter')($scope.$storage.priceList, {checked: true});
}
$scope.promotionFilter = function () {
      $scope.fav = $filter('filter')($scope.$storage.promotionList, {checked: true});
}
$scope.placeFilter = function () {
      $scope.fav = $filter('filter')($scope.$storage.placeList, {checked: true});
}
$scope.peopleFilter = function () {
     $scope.fav = $filter('filter')($scope.$storage.peopleList, {checked: true});
}
$scope.processFilter = function () {
     $scope.fav = $filter('filter')($scope.$storage.processList, {checked: true});
}
$scope.physicalevidenceFilter = function () {
     $scope.fav = $filter('filter')($scope.$storage.physicalevidenceList, {checked: true});
}
$scope.rivalryFilter = function () {
      $scope.fav = $filter('filter')($scope.$storage.rivalryList, {checked: true});
}
$scope.newentryFilter = function () {
     $scope.fav = $filter('filter')($scope.$storage.newentryList, {checked: true});
}
$scope.supplierpFilter = function () {
     $scope.fav = $filter('filter')($scope.$storage.supplierpList, {checked: true});
}
$scope.buyingpFilter = function () {
     $scope.fav = $filter('filter')($scope.$storage.buyingpList, {checked: true});
}
$scope.substFilter = function () {
     $scope.fav = $filter('filter')($scope.$storage.substList, {checked: true});
 }

     $scope.politicalFilter = function () {
          $scope.fav = $filter('filter')($scope.$storage.politicalList, {checked: true});
     }
     $scope.economicalFilter = function () {
          $scope.fav = $filter('filter')($scope.$storage.economicalList, {checked: true});
     }
     $scope.socialFilter = function () {
          $scope.fav = $filter('filter')($scope.$storage.socialList, {checked: true});
     }
     $scope.technologicalFilter = function () {
          $scope.fav = $filter('filter')($scope.$storage.technologicalList, {checked: true});
     }

 $scope.$storage =  $localStorage.$default({
   strengthList : [
                      { text: "1. Does your company have technological advantages?", suggestion: "Technological advantages", checked: false },
                      { text: "2. Do you perform better than your competitiors?", suggestion: "Better performance", checked: false },
                      { text: "3. Are you strategically located within your sector?", suggestion: "Location advantage", checked: false },
                      { text: "4. Do you have features that your customers benefit the customers?", suggestion: "Unique features", checked: false },
                      { text: "5. Does your company have strong customer base?", suggestion: "Strong customer base", checked: false },
                      { text: "6. Does your company have skilled labour?", suggestion: "Skilled labour", checked: false },
                      { text: "7. Does your company have enough resources, assets, machineries and people for the company?", suggestion: "Resources, assets, machineries and people", checked: false }

 ],
 weaknessList : [
  { text: "1. Does your company lack competitive strength?", suggestion: "Lack of competitive strength", checked: false },
  { text: "2. Are you not making enough profit?",suggestion: "Less profit", checked: false },
  { text: "3. Do you waste your strength?",suggestion: "waste my resources", checked: false },
  { text: "4. Do customers complain about your product?", suggestion: "Customer complaint", checked: false },
  { text: "5. Do you have weakness in financial performance?", suggestion: "Weak financial performance", checked: false },
  { text: "6. Do you have reliability issues", suggestion: "Reliability issues", checked: false },
  { text: "7. Is your company restricted by deadlines, pressures or suppliers timeline and seasonality", suggestion: "Deadlines, pressures and seasonality", checked: false },
  { text: "8. Are you not using skilled labour and available knowledge in production", suggestion: "Lack of knowledge and unskilled labour", checked: false },
  { text: "9. Do you use good marketing expertise?", suggestion: "Inadequate marketing expertise", checked: false }
],
opportunitiesList : [
  { text: "1.Is there a possibility for external changes that bring opportunities?", suggestion: "Favourable external changes", checked: false },
  { text: "2. 2.Do the current trends affect you in the positive manner?", suggestion: "Positive current trends", checked: false },
  { text: "3.Are you aware of competitor's weaknesses?", suggestion: "Knowledge about competitor's weaknesses", checked: false },
  { text: "4.Can you able to satisfy the needs of the clients that cannot be offered by your competitors?", suggestion: "Able to provide missing needs to clients", checked: false },
  { text: "5.Is there  scope for weather or climatic changes that will favour your range of products?", suggestion: "Positive weather/climatic changes", checked: false },
  { text: "6.Does your company have good business opportunities?", suggestion: "Good business opportunities", checked: false },
  { text: "7.Is there scope for technological development on the market?", suggestion: "Technological development", checked: false }
],
threatsList : [
  { text: "  1.Are your competitors improving the product or services better than you?", suggestion: "Competitors' new product and improvements", checked: false },
  { text: "2.Are there any obstacles that could menace the existence and functioning of your company?", suggestion: "Obstacles in proper functioning", checked: false },
  { text: "3.Does technological changes threaten your company's position?", suggestion: "Technological changes", checked: false },
  { text: "4.Do you face issues regarding capital resources or debts or cash flow or seasonal revenues?", suggestion: "Debts/cash flow/issues in capital resources/seasonal revenues", checked: false },
  { text: "5.Do you see that your company staff have been hired by your competitors?", suggestion: "Poaching of your company staff", checked: false },
  { text: "6.Are the changes in government regulations and political instability affect your company?", suggestion: "Government regulations and political instability", checked: false }
],
productList : [
  { text: "1. Does your company produce variety of products in order to meet customer satisfaction?", suggestion: "Variety", checked: true },
  { text: "2. Does your brand name influence company sales?", suggestion: "Brand name", checked: false },
  { text: "3. Do your products meet customer's requirement?", suggestion: "Customer requirement", checked: false },
  { text: "4. Do customers complain about quality of products?", suggestion: "Customer complaints", checked: false },
  { text: "5. Is the packaging effective?", suggestion: "Effective packaging", checked: false },
  { text: "6. Does your company provide warranty for your products sold?", suggestion: "Product warranty", checked: false }
],
priceList : [
  { text: "1. Do you allow for discounts of your products?", suggestion: "Discounts", checked: false },
  { text: "2. Are the prices of the products appropriate?", suggestion: "Appropriate pricing", checked: false },
  { text: "3. Does your pricing decisions allow for payment period?", suggestion: "Payment period", checked: false },
  { text: "4. Does your pricing strategy give room for large customer bases?", suggestion: "Large customer base", checked: false },
  { text: "5. Does applying strategies to price leads to increase in sales, thereby contibuting to achievement of objectives?", suggestion: "Increased sales", checked: false },
  { text: "6. Does your pricing decisions allow for credit terms?", suggestion: "Credit", checked: false }
],
promotionList : [
  { text: "1. Do the people know your products based on promotional strategy?", suggestion: "Promotional strategy", checked: false },
  { text: "2. Does your organization apply sales promotion as one of the promotion strategies?", suggestion: "Sales promotion", checked: false },
  { text: "3. Does your organization apply advertising promotion as one of the promotion strategies?", suggestion: "Advertising", checked: false },
  { text: "4. Does your organization apply selling promotion as one of the promotion strategies?", suggestion: "Selling", checked: false },
  { text: "5. Does your promotion influence the rate of purchase positively?", suggestion: "Rate of purchase", checked: false },
],
placeList : [
  { text: "1. Do your products get to target the customers?", suggestion: "Distributed channels", checked: false },
  { text: "2. Does the location of products aid accessibility?", suggestion: "Easy Access", checked: false },
  { text: "3. Is channel coverage effective?", suggestion: "Effective channel coverage", checked: false },
  { text: "4. Is transportation effective?", suggestion: "Ease of transportation", checked: false },
],
processList : [
  { text: "  1.Does your company have flow of activities that enable quick delivery of your product?", suggestion: "Quick delivery", checked: false },
  { text: "2.Are there processes to handle customer complaints?", suggestion: "Handle customer complaints", checked: false },
  { text: "3.Does it handle incoming orders?", suggestion: "Efficient handling of oders", checked: false },
  { text: "4.Is there processes to identify customer needs?", suggestion: "Process to identify customer needs", checked: false },
],
peopleList : [
  { text: "1.Have you recruited and trained the right people for your company?", suggestion: "Right recruitment and training", checked: false },
  { text: "2.Do your employees have appropriate interpersonal skills and product knowledge?", suggestion: "Interpersonal skills and product knowledge", checked: false },
  { text: "3.Is your company is organized in such a way that it understands and meets the needs of the customer?", suggestion: "Customer needs", checked: false },
  { text: "4.Does the management have proper work culture?", suggestion: "Proper work culture", checked: false }
],
physicalevidenceList : [
  { text: "1.Does your product/service provide good facilities that initiate or retain customers?", suggestion: "Good Facilities", checked: false },
  { text: "2.Is there adequate infrastructure to handle orders?", suggestion: "Infrastructure", checked: false },
  { text: "3.Does the company provide proper packaging of product that appeal customers?", suggestion: "Proper Packaging", checked: false },
  { text: "4.Does your company provide online experience?", suggestion: "Online Experience", checked: false },
  { text: "5.Is the ambience appealing to the customers?", suggestion: "Ambience", checked: false }
],
newentryList : [
  { text: "1.   Time and cost of entry: When the time and the cost to start the business is high, the entry into that business is less.Hence less competition.", suggestion: "t1", checked: true },
  { text: "2. Special knowledge:It is the unique knowledge required to start a business. It might require high skills.", suggestion: "t2", checked: false },
  { text: "3. Economics of scale: It is the proportionate savings in costs gained by an increased level of production which decreases cost per unit.", suggestion: "t3", checked: false },
  { text: "Cost advantages: It is the ability to produce a product at lower cost than its competitors.", suggestion: "t4", checked: false },
  { text: "5. Is the packaging effective?", suggestion: "t5", checked: false }
],
rivalryList : [
  { text: "1. Number of competitors: Competition results in lower price and higher number of goods delivered to more people.When competition is less,prices are high and innovation is less.", suggestion: "t1", checked: false },
  { text: "2. Quality differences: Customer satisfaction is impacted by product quality. When quality is better than the competitors, the rivalry is less.", suggestion: "t2", checked: false },
  { text: "3. Switching cost: It is the cost a customer incurs when switching to another brand.", suggestion: "t3", checked: false },
  { text: "4. Customer loyalty: It is the result of consistently providing positive experiences to customers so that leads to increased value of a product.", suggestion: "t4", checked: false }
],
supplierpList : [
  { text: "1. Number of suppliers: The raw materials are obtained from suppliers. When the  number of suppliers are high, it influences the price of raw materials.", suggestion: "t1", checked: false },
  { text: "2. Switching cost: It is the cost incurred to switch to  another supplier.", suggestion: "t2", checked: false },
  { text: "3. Ability to integrate: It is the ability of supplier to integrate forward and become a competitor.", suggestion: "t3", checked: false },
  { text: "4. Uniqueness of supplier: It is the unique raw product quality or service differentiated from other suppliers.", suggestion: "t4", checked: false }
],
buyingpList : [
  { text: "1. Number of customers: The number of customers determine the demand for a product. The price, competition and quality are proportionate to number of customers.", suggestion: "t1", checked: false },
  { text: "2. Size of each order: The average amount a customer spends when they purchase your product. Increase in average size of order increase the income of your business.", suggestion: "t2", checked: false },
  { text: "3. Difference between competitors: The price,quality,delivery,customer satisfaction,brand value differentiate between your competitors and you.", suggestion: "t3", checked: false },
  { text: "4. Price Sensitivity: It is the degree to which the price of products affect customers' purchasing behaviour.", suggestion: "t4", checked: false },
  { text: "5. Ability to substitute: The ability of buyer to substitute product is more when many alternative products are available and affordable. In that case it limits the business to raise prices to improve profit.", suggestion: "t4", checked: false }
],
substList : [
  { text: "1. Substitute performance:  When the substitute performance is better than your product, the threat is more.", suggestion: "t1", checked: false },
  { text: "2. Cost of changing: It is the cost a customer incurs when switching to the substitute product.", suggestion: "t2", checked: false },
  { text: "3. Ability to import: When an alternative product is available for import which the customer desires to purchase, the threat increases.", suggestion: "t3", checked: false }
],
politicalList : [
  { text: "1. The political situation of the country does it affects the industry?", suggestion: "t1", checked: false },
  { text: "2. Current legislations that regulate industry or change in legislations?", suggestion: "t2", checked: false },
  { text: "3. The government may impose a new tax or duty due to which entire revenue generating structures of organisations  might change or not?", suggestion: "t3", checked: false },
  { text: "4. Government may levy around fiscal year does it affect business  environment?", suggestion: "t4", checked: false },
  { text: "5. .legal factors include consumer law,employment law does these factors affects how a company operates ,it costs and demand for its products?", suggestion: "t5", checked: false }
],
economicalList : [
  { text: "1. Interest rate would affect the cost of capital rate of interest being directly proportionate to cost of capital?", suggestion: "t1", checked: false },
  { text: "2. .Does the economic trend act as an indicator of sustainability and profitability  of your business  in chosen region and helps in deciding the marketing strategy?", suggestion: "t2", checked: false },
  { text: "3. The economic factors include economic  growth, interest rate,exchange rate, inflation  rate does the factors affect businesses operate and make decisions?", suggestion: "t3", checked: false },
  { text: "4.  Does interest rate affect a firms cost of capital?", suggestion: "t4", checked: false }
],
socialList : [
  { text: "1. Does the social factors help the businesses  examine  consumer needs and determine  what pushes them to make purchases?", suggestion: "t1", checked: false },
  { text: "2. nil?", suggestion: "t2", checked: false },
  { text: "3. nil", suggestion: "t3", checked: false },
  { text: "4. nil", suggestion: "t4", checked: false }
],
technologicalList : [
  { text: "1.Technological innovations likely to pop up does it affects the market structure?", suggestion: "t1", checked: false },
  { text: "2. Innovations in technology  may affect operations in industry?", suggestion: "t2", checked: false },
  { text: "3. Does the technological factors takes in to consideration  technology issues that affect how an organisation  delivers it product or service to marketplace?", suggestion: "t3", checked: false },
  { text: "4. does the technological shifts affects the cost of quality?", suggestion: "t4", checked: false }
]
});

$scope.labels10 =["January","February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
$scope.series10 = ['Expected Income', 'Actual Income'];
$scope.data10 =[
    [$scope.data.exjanuary,$scope.data.exfebruary,$scope.data.exmarch,$scope.data.exapril,$scope.data.exmay,$scope.data.exjune,$scope.data.exjuly,$scope.data.exaugust,$scope.data.exseptember,$scope.data.exoctober,$scope.data.exnovember,$scope.data.exdecember],
    [$scope.data.acjanuary,$scope.data.acfebruary,$scope.data.acmarch,$scope.data.acapril,$scope.data.acmay,$scope.data.acjune,$scope.data.acjuly,$scope.data.acaugust,$scope.data.acseptember,$scope.data.acoctober,$scope.data.acnovember,$scope.data.acdecember]
];

$scope.labels11 =["Week 1","Week 2", "Week 3","Week 4"];
$scope.series11 = ['Expected Income', 'Actual Income'];
$scope.data11 =[
    [$scope.data.exweek1,$scope.data.exweek2,$scope.data.exweek3,$scope.data.exweek4],
    [$scope.data.acweek1,$scope.data.acweek2,$scope.data.acweek3,$scope.data.acweek4]
];
$scope.type1 = 'PolarArea';

    $scope.toggle1 = function () {
      $scope.type1 = $scope.type1 === 'PolarArea' ?
        'Pie' : 'PolarArea';
    };
$scope.type = 'Bar';

    $scope.toggle = function () {
      $scope.type = $scope.type === 'Bar' ?
        'Line' : 'Bar';
    };

  });
