let HomeController = function(InstaService) {
  
  let vm = this;

  vm.grams = [];

  activate();

  function activate () {
    InstaService.getAllGrams().then( (res) => {
      vm.grams = res.data.results;
      console.log(res);
    });
  }

};

HomeController.$inject = ['InstaService'];

export default HomeController;