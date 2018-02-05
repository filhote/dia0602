// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Tabs e login

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      })

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tabs/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })

      .state('tab.agenda', {
        url: '/agenda',
        views: {
          'tab-agenda': {
            templateUrl: 'templates/tabs/tab-agenda.html',
            controller: 'AgendaCtrl'
          }
        }
      })

      .state('filho', {
        url: '/filho',
        templateUrl: 'templates/tabs/filhos-perfil.html',
        controller: 'FilhosCtrl'
      })

      .state('tab.arvore', {
        url: '/arvore',
        views: {
          'tab-arvore': {
            templateUrl: 'templates/tabs/tab-arvore.html',
            controller: 'ArvoreCtrl'
          }
        }
      })
      .state('tab.foto', {
        url: '/foto',
        views: {
          'tab-foto': {
            templateUrl: 'templates/tabs/tab-foto.html',
            controller: 'FotoCtrl'
          }
        }
      })

      .state('tab.perfil', {
        url: '/perfil',
        views: {
          'tab-perfil': {
            templateUrl: 'templates/tabs/tab-perfil.html',
            controller: 'PerfilCtrl'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
