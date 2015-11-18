let InstaService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/gram';

  this.getAllGrams = getAllGrams;
  this.addGram = addGram;

  function Gram (gramObj) {
    this.url = gramObj.url;
    this.desc = gramObj.desc;
  }

  function getAllGrams () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addGram (gramObj) {
    let g = new Gram(gramObj);
    return $http.post(url, g, PARSE.CONFIG);
  }

};

InstaService.$inject = ['$http', 'PARSE'];

export default InstaService;