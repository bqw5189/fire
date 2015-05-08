fire.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('fire.menu', {
    url: "/menu",
    templateUrl: "modules/menu/page.html",
    controller:'MenuCtrl'
  }) 
  .state('fire.menu.cooking', {
	    url: "/cookings/:vid",
	    views: {
		      'menuContent': {
		  	    templateUrl: "modules/menu/cooking.html",
			    controller:'CookingCtrl'
		      }
		    }
	  })
	.state('fire.menu.cookings', {
	    url: "/cookings",
	    views: {
		      'menuContent': {
		  	    templateUrl: "modules/menu/cookings.html",
			    controller:'MenuCtrl'
		      }
		    }
	  })
//  $urlRouterProvider.when('/','/subscribe/list');
});