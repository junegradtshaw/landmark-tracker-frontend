app.service("LandmarkService", function($http){
  var LandmarkService = {};

  LandmarkService.getLandmarks = function(){
    // return $http.get("http://localhost:3000/landmarks", {method: "jsponp"});
    // return $http.get("https://landmark-app.herokuapp.com/landmarks", {method: "jsonp"});
    return $http.get('https://landmark-app.herokuapp.com/landmarks');
  }

  // CatService.getCat = function(cat_id){
  //   return $http.get("http://localhost:3000/cats/"+cat_id);
  //   // return $http.get("https://frozen-badlands-34577.herokuapp.com/cats/"+cat_id, {method: "jsonp"});
  // }
  //
  // CatService.addCat = function(catObject) {
  //   return $http.post("http://localhost:3000/cats/", catObject);
  // }

  return LandmarkService;
});
