fire.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('fire.menu', {
    url: "/menu",
    templateUrl: "modules/menu/page.html",
    controller:'MenuCtrl'
  }) 
  .state('fire.menu.cooking', {
	    url: "/cooking",
	    views: {
		      'menuContent': {
		  	    templateUrl: "modules/menu/cooking.html",
			    controller:'MenuCtrl'
		      }
		    }
	  })
//  $urlRouterProvider.when('/','/subscribe/list');
});