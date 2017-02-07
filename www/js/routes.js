angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('feedfirst', {
    url: '/',
    templateUrl: 'templates/feedfirst.html',
    controller: 'feedfirstCtrl'
  })

  .state('tabsController.search', {
    url: '/search',
    views: {
      'tab2': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.newPost', {
    url: '/camera',
    views: {
      'tab5': {
        templateUrl: 'templates/newPost.html',
        controller: 'newPostCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('feed2', {
    url: '/page7',
    templateUrl: 'templates/feed2.html',
    controller: 'feed2Ctrl'
  })

  .state('tabsController.feed', {
    url: '/feed',
    views: {
      'tab1': {
        templateUrl: 'templates/feed.html',
        controller: 'feedCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/feed')

  

});