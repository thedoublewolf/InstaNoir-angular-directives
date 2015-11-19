import $ from 'jquery';

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
        <i class="thumbsuphidden fa fa-thumbs-up fa-5x"></i>
        <p class="likenum"><i class="fa fa-thumbs-up"></i>{{ gram.likes }}</p>
      </div>
    `,
    controller: 'AddController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $('.thumbsuphidden').toggleClass('thumbsuphidden').toggleClass('thumbsupshown');
        // InstaService.addLike(scope.gram);
        console.log('click');
      });
    }
  };

};

gramItem.$inject = ['InstaService'];

export default gramItem;