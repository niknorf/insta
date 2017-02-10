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

.controller('mainCtrl', function($scope, $ionicPlatform, $cordovaFileTransfer, $cordovaCamera, $http){    
    $scope.takePhoto = function()
    {
        var options =  {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,            
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE             
        };

        $ionicPlatform.ready(function() {
            $cordovaCamera.getPicture(options).then(function(imageData) {
                $scope.picture = imageData;
            }, function(err) {
                  // error
            });
        });
    }


    $scope.uploadGallery = function()
    {
        var options =  {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,            
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE             
        };

        $ionicPlatform.ready(function() {
            $cordovaCamera.getPicture(options).then(function(imageData) {
                $scope.picture = imageData;
            }, function(err) {
                  // error
            });
        });
    }






    /*$scope.uploadGallery = function() {
    	var options = {
            quality: 80,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 500,
            targetHeight: 700,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };

        $cordovaCamera.getPicture(options).then(function(imageData){
            $rootScope.imgURI = "data:image/jpeg;base64," + imageData;
            $scope.lastPhoto = "data:image/jpeg;base64," + imageData;
            $go.state(tab.feed);

            
        })
    }*/


    $scope.uploadPhoto = function()
    {
        var options = new FileUploadOptions()
        options.fileKey = "image";

        $cordovaFileTransfer.upload('https://still-retreat-71985.herokuapp.com/upload', $scope.picture, options).then(function(result) {
            console.log("File upload complete");
            console.log(result);
            $scope.uploadResults = "Upload completed successfully"            
        }, function(err) {
            console.log("File upload error");
            console.log(err);
            $scope.uploadResults = "Upload failed"                           
        }, function (progress) {
            // constant progress updates
            console.log(progress);
        });
    }

    $scope.testConnection = function()
    {
        $http.get('https://still-retreat-71985.herokuapp.com/').then(function(result){
            $scope.serverConnection = "Connection OK";
        },
        function(err){
            $scope.serverConnection = "Connection fail";
        });

    }
})



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
	images: "img/15.jpg"
	},

	{
	nickname: 'joshua',
	avatar: 'img/FF4fMaKHQEeP0OnKvDRn_3.jpg',
	qposts: 123,
	qfollowers: 321,
	qfollowing: 325,
	images: "img/16.jpg"
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
	/*}, {
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
		}]*/
}];