// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('tactics', ['ionic', 'tactics.controllers','chart.js','ngStorage'])

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

  .state('app.companyinfo', {
      url: '/companyinfo',
      views: {
        'menuContent': {
          templateUrl: 'templates/companyinfo.html'
        }
      }
    })

    .state('app.finance', {
        url: '/finance',
        views: {
          'menuContent': {
            templateUrl: 'templates/finance.html'
          }
        }
      })

      .state('app.strategies', {
          url: '/strategies',
          views: {
            'menuContent': {
              templateUrl: 'templates/strategies.html'
            }
          }
        })

    .state('app.sales', {
        url: '/sales',
        views: {
          'menuContent': {
            templateUrl: 'templates/sales.html'
          }
        }
      })
      .state('app.todo', {
          url: '/todo',
          views: {
            'menuContent': {
              templateUrl: 'templates/todo.html'
            }
          }
        })
      .state('app.monthlyincome', {
          url: '/monthlyincome',
          views: {
            'menuContent': {
              templateUrl: 'templates/monthlyincome.html'
            }
          }
        })

.state('app.monthlyincomeoutput', {
    url: '/monthlyincomeoutput',
    views: {
      'menuContent': {
        templateUrl: 'templates/monthlyincomeoutput.html'
      }
    }
  })

  .state('app.weeklyincome', {
      url: '/weeklyincome',
      views: {
        'menuContent': {
          templateUrl: 'templates/weeklyincome.html'
        }
      }
    })

    .state('app.weeklyincomeoutput', {
        url: '/weeklyincomeoutput',
        views: {
          'menuContent': {
            templateUrl: 'templates/weeklyincomeoutput.html'
          }
        }
      })

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

          .state('app.swotoutput', {
              url: '/swotoutput',
              views: {
                'menuContent': {
                  templateUrl: 'templates/swotoutput.html'
                }
              }
            })
            .state('app.swotch', {
                url: '/swotch',
                views: {
                  'menuContent': {
                    templateUrl: 'templates/swotch.html'
                  }
                }
              })
            .state('app.strength', {
                url: '/strength',
                views: {
                  'menuContent': {
                    templateUrl: 'templates/strength.html'
                  }
                }
              })

              .state('app.weakness', {
                  url: '/weakness',
                  views: {
                    'menuContent': {
                      templateUrl: 'templates/weakness.html'
                    }
                  }
                })

                .state('app.opportunities', {
                    url: '/opportunities',
                    views: {
                      'menuContent': {
                        templateUrl: 'templates/opportunities.html'
                      }
                    }
                  })

                  .state('app.threats', {
                      url: '/threats',
                      views: {
                        'menuContent': {
                          templateUrl: 'templates/threats.html'
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

            .state('app.outputproduct', {
                url: '/outputproduct',
                views: {
                  'menuContent': {
                    templateUrl: 'templates/outputproduct.html'
                  }
                }
              })

              .state('app.outputprice', {
                  url: '/outputprice',
                  views: {
                    'menuContent': {
                      templateUrl: 'templates/outputprice.html'
                    }
                  }
                })

                .state('app.outputpromotion', {
                    url: '/outputpromotion',
                    views: {
                      'menuContent': {
                        templateUrl: 'templates/outputpromotion.html'
                      }
                    }
                  })

                  .state('app.outputplace', {
                      url: '/outputplace',
                      views: {
                        'menuContent': {
                          templateUrl: 'templates/outputplace.html'
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
                      .state('app.outputinfrach', {
                          url: '/outputinfrach',
                          views: {
                            'menuContent': {
                              templateUrl: 'templates/outputinfrach.html'
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


                              .state('app.breakevenoutput', {
                                  url: '/breakevenoutput',
                                  views: {
                                    'menuContent': {
                                      templateUrl: 'templates/breakevenoutput.html'
                                    }
                                  }
                                })

                              .state('app.price', {
                                  url: '/price',
                                  views: {
                                    'menuContent': {
                                      templateUrl: 'templates/price.html'
                                    }
                                  }
                                })

                                .state('app.place', {
                                    url: '/place',
                                    views: {
                                      'menuContent': {
                                        templateUrl: 'templates/place.html'
                                      }
                                    }
                                  })

                                  .state('app.product', {
                                      url: '/product',
                                      views: {
                                        'menuContent': {
                                          templateUrl: 'templates/product.html'
                                        }
                                      }
                                    })

                                    .state('app.promotion', {
                                        url: '/promotion',
                                        views: {
                                          'menuContent': {
                                            templateUrl: 'templates/promotion.html'
                                          }
                                        }
                                      })



                                      .state('app.outputinitial', {
                                          url: '/outputinitial',
                                          views: {
                                            'menuContent': {
                                              templateUrl: 'templates/outputinitial.html'
                                            }
                                          }
                                        })

                                        .state('app.outputinfra', {
                                            url: '/outputinfra',
                                            views: {
                                              'menuContent': {
                                                templateUrl: 'templates/outputinfra.html'
                                              }
                                            }
                                          })

                                          .state('app.outputiniex', {
                                              url: '/outputiniex',
                                              views: {
                                                'menuContent': {
                                                  templateUrl: 'templates/outputiniex.html'
                                                }
                                              }
                                            })

                                            .state('app.outputother', {
                                                url: '/outputother',
                                                views: {
                                                  'menuContent': {
                                                    templateUrl: 'templates/outputother.html'
                                                  }
                                                }
                                              })
                                              .state('app.outputmonch', {
                                                  url: '/outputmonch',
                                                  views: {
                                                    'menuContent': {
                                                      templateUrl: 'templates/outputmonch.html'
                                                    }
                                                  }
                                                })


                                        .state('app.outputmonthly', {
                                            url: '/outputmonthly',
                                            views: {
                                              'menuContent': {
                                                templateUrl: 'templates/outputmonthly.html'
                                              }
                                            }
                                          })



                                                                                      .state('app.outputmsub1', {
                                                                                          url: '/outputmsub1',
                                                                                          views: {
                                                                                            'menuContent': {
                                                                                              templateUrl: 'templates/outputmsub1.html'
                                                                                            }
                                                                                          }
                                                                                        })


                                                                                                                                    .state('app.outputmsub2', {
                                                                                                                                        url: '/outputmsub2',
                                                                                                                                        views: {
                                                                                                                                          'menuContent': {
                                                                                                                                            templateUrl: 'templates/outputmsub2.html'
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      })

                                                                                                                                                                                  .state('app.outputmsub3', {
                                                                                                                                                                                      url: '/outputmsub3',
                                                                                                                                                                                      views: {
                                                                                                                                                                                        'menuContent': {
                                                                                                                                                                                          templateUrl: 'templates/outputmsub3.html'
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    })

                                                                                                                                                                                                                                .state('app.outputmsub4', {
                                                                                                                                                                                                                                    url: '/outputmsub4',
                                                                                                                                                                                                                                    views: {
                                                                                                                                                                                                                                      'menuContent': {
                                                                                                                                                                                                                                        templateUrl: 'templates/outputmsub4.html'
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  })


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
