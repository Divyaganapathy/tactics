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
        url: '/startUpCalculator',
        views: {
          'menuContent': {
            templateUrl: 'templates/startUpCalculator.html'
          }
        }
      })

      .state('app.breakEvenAnalysis', {
          url: '/breakEvenAnalysis',
          views: {
            'menuContent': {
              templateUrl: 'templates/breakEvenAnalysis.html'
            }
          }
        })

        .state('app.swotAnalysis', {
            url: '/swotAnalysis',
            views: {
              'menuContent': {
                templateUrl: 'templates/swotAnalysis.html'
              }
            }
          })
          .state('app.marketingMix', {
              url: '/marketingMix',
              views: {
                'menuContent': {
                  templateUrl: 'templates/marketingMix.html'
                }
              }
            })
            .state('app.initialSetupCost', {
                url: '/initialSetupCost',
                views: {
                  'menuContent': {
                    templateUrl: 'templates/initialSetupCost.html'
                  }
                }
              })

              .state('app.monthlyExpenses', {
                  url: '/monthlyExpenses',
                  views: {
                    'menuContent': {
                      templateUrl: 'templates/monthlyExpenses.html'
                    }
                  }
                })

<<<<<<< HEAD
=======
                .state('app.initialsub1', {
                    url: '/initialsub1',
                    views: {
                      'menuContent': {
                        templateUrl: 'templates/initialsub1.html'
                      }
                    }
                  })
                  .state('app.initialsub2', {
                      url: '/initialsub2',
                      views: {
                        'menuContent': {
                          templateUrl: 'templates/initialsub2.html'
                        }
                      }
                    })

                    .state('app.initialsub3', {
                        url: '/initialsub3',
                        views: {
                          'menuContent': {
                            templateUrl: 'templates/initialsub3.html'
                          }
                        }
                      })

                      .state('app.initialinfra', {
                          url: '/initialinfra',
                          views: {
                            'menuContent': {
                              templateUrl: 'templates/initialinfra.html'
                            }
                          }
                        })

                      .state('app.monthlysub1', {
                          url: '/monthlysub1',
                          views: {
                            'menuContent': {
                              templateUrl: 'templates/monthlysub1.html'
                            }
                          }
                        })
                        .state('app.monthlysub2', {
                            url: '/monthlysub2',
                            views: {
                              'menuContent': {
                                templateUrl: 'templates/monthlysub2.html'
                              }
                            }
                          })

                          .state('app.monthlysub3', {
                              url: '/monthlysub3',
                              views: {
                                'menuContent': {
                                  templateUrl: 'templates/monthlysub3.html'
                                }
                              }
                            })

                            .state('app.monthlysub4', {
                                url: '/monthlysub4',
                                views: {
                                  'menuContent': {
                                    templateUrl: 'templates/monthlysub4.html'
                                  }
                                }
                              })

>>>>>>> c27c44ff2c34c7d61c329bee9ebe46db7f34c324
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
