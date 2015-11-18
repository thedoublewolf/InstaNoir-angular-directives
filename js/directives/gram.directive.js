let gramItem = function(InstaService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      gram: '=gram'
    },
    template: `
      <div class="panel">
        <img src="{{ gram.url }}">
      </div>
    `,
  };

};

gramItem.$inject = ['InstaService'];

export default gramItem;