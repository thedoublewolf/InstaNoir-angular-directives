let AddController = function(InstaService) {
  
  let vm = this;

  vm.addGram = addGram;

  function addGram (gramObj) {
    InstaService.addGram(gramObj).then( (res) => {
      console.log(res);
    });
  }

};

AddController.$inject = ['InstaService'];

export default AddController;