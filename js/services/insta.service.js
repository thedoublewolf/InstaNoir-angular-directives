let InstaService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/gram';

  this.getAllGrams = getAllGrams;
  this.addGram = addGram;

  function Gram (gramObj) {
    this.url = gramObj.url;
    this.desc = gramObj.desc;
    this.likes = gramObj.likes;
  }

  // function Like (gramObj) {
  //   this.likes = gramObj.likes;
  // }

  function getAllGrams () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addGram (gramObj) {
    let g = new Gram(gramObj);
    return $http.post(url, g, PARSE.CONFIG);
  }

  function addLike (gramObj) {
    gramObj.likes = gramObj.likes + 1;
    return $http.put(url + '/' + gramObj.objectId, gramObj, PARSE.CONFIG);
  }

  // function addLike (gramObj) {
  //   let l = new Like(gramObj);
  //   return $http.post(url, l, PARSE.CONFIG);
  // }
};

InstaService.$inject = ['$http', 'PARSE'];

export default InstaService;