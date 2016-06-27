// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('tactics', ['ionic', 'tactics.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

/*  .state('app.companyinformation', {
      url: '/companyinformation',
      views: {
        'menuContent': {
          templateUrl: 'templates/companyinformation.html'
        }
      }
    }) */

    .state('app.startUpCalculator', {
        url: '/StartUp Calculator',
        views: {
          'menuContent': {
            templateUrl: 'templates/startUpCalculator.html'
          }
        }
      })

      .state('app.breakEvenAnalysis', {
          url: '/Break Even Analysis',
          views: {
            'menuContent': {
              templateUrl: 'templates/breakEvenAnalysis.html'
            }
          }
        })

        .state('app.swotAnalysis', {
            url: '/SWOT Analysis',
            views: {
              'menuContent': {
                templateUrl: 'templates/swotAnalysis.html'
              }
            }
          })

          .state('app.marketingMix', {
              url: '/Marketing Mix',
              views: {
                'menuContent': {
                  templateUrl: 'templates/marketingMix.html'
                }
              }
            });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});