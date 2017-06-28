angular.module('app')
  .filter('formatImageUrl',['WebConst',
  function (WebConst) {
		return function (item,props){
	        var MEDIA_URL = WebConst.MEDIA_URL;
	        var IMG_PLACE_HOLDER = '/img/image-not-available.png';
			var out = "";
			if(item){
			    out = MEDIA_URL + item;
			}else{
				out = IMG_PLACE_HOLDER
			}
			return out;
		}
}
])