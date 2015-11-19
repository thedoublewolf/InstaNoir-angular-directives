let gramItem = function(InstaService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      gram: '=gram'
    },
    template: `
      <div class="gramblock">
        <img class="image" src="{{ gram.url }}">
        <p><i class="fa fa-thumbs-up"></i>{{ gram.likes }}</p>
      </div>
    `,
  };

};

gramItem.$inject = ['InstaService'];

export default gramItem;