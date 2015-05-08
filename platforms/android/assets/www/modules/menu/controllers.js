angular.module('menu.controllers', [])

.controller('MenuCtrl', function($scope) {
	$scope.items = [{title:'腊肉炒饭',vid:'XOTQ3ODk5ODE2'},{title:'锅包肉',vid:'XODY4Nzg3MjQw'}]
	})
	
.controller('CookingCtrl', function($scope,$stateParams) {
	
	
	player = new YKU.Player('youkuplayer',{
		
		styleid: '0',
		
		client_id: '0e7361bc660490f3',
		
		vid: $stateParams.vid,
		
		embsig: 'ce8485584e2c92e3839544e4e1e470b9'
		
		});	
	});

