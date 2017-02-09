angular.module('app.controllers', [])
  
.controller('feedfirstCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('searchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('newPostCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('feed2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('feedCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('UsersProfilesCtrl', ['$scope', function($scope){
	$scope.users = users_info;
}])

.controller('UsersPostsCtrl', ['$scope', function($scope){
	$scope.posts = stuff;

	var hasLiked = false;

	$scope.likes = function(post) {
		if (hasLiked === false) {
			post.likes +=1;
			hasLiked = true;
		}
		else {
			post.likes -=1;
			hasLiked = false;
		}
	};
}])

var users_info = [{
	nickname: 'joshua',
	avatar: 'img/FF4fMaKHQEeP0OnKvDRn_3.jpg',
	qposts: 123,
	qfollowers: 321,
	qfollowing: 325,
	images: "img/FF4fMaKHQEeP0OnKvDRn_3.jpg"
	},

	{
	nickname: 'joshua',
	avatar: 'img/FF4fMaKHQEeP0OnKvDRn_3.jpg',
	qposts: 123,
	qfollowers: 321,
	qfollowing: 325,
	images: "img/FF4fMaKHQEeP0OnKvDRn_3.jpg"
	},

	{
	nickname: 'joshua',
	avatar: 'img/FF4fMaKHQEeP0OnKvDRn_3.jpg',
	qposts: 123,
	qfollowers: 321,
	qfollowing: 325,
	images: "img/FF4fMaKHQEeP0OnKvDRn_3.jpg"
	}
];

var stuff = [{
	author: 'kevin',
	author_avatar: 'img/FF4fMaKHQEeP0OnKvDRn_3.jpg',
	post_image: 'img/FF4fMaKHQEeP0OnKvDRn_3.jpg',
	post_comment: 'Just look at this!',
	likes: 0,
	comments: [{
		comm_author: 'jake',
		comm: 'This is awesome, bro!'
	},  {
		comm_author: 'tom',
		comm: 'I cant believe it!'
	}, {
		comm_author: 'james',
		comm: 'You just made my day dude'
	}]
	}, {
	author: 'james',
	author_avatar: 'img/FF4fMaKHQEeP0OnKvDRn_3.jpg',
	post_image: 'img/FF4fMaKHQEeP0OnKvDRn_3.jpg',
	post_comment: 'Coooooooooooool',
	likes: 0,
	comments: [{
		comm_author: 'jake',
		comm: 'This is awesome, bro!'
	},  {
		comm_author: 'tom',
		comm: 'I cant believe it!'
	}, {
		comm_author: 'james',
		comm: 'You just made my day dude'
	}]
	}, {
	author: 'givi',
	author_avatar: 'img/FF4fMaKHQEeP0OnKvDRn_3.jpg',
	post_image: 'img/FF4fMaKHQEeP0OnKvDRn_3.jpg',
	post_comment: 'Just look at this!',
	likes: 0,
	comments: [{
		comm_author: 'jake',
		comm: 'This is awesome, bro!'
		},  {
		comm_author: 'tom',
		comm: 'I cant believe it!'
		}, {
		comm_author: 'james',
		comm: 'You just made my day dude'
		}]
}];