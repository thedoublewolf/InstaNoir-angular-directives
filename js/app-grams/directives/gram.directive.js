// import $ from 'jquery';

let gramItem = function(InstaService, $timeout) {
  
  return {
    restrict: 'AE',
    // replace: true,
    scope: {
      gram: "=gram"
    },
    template: `
      <div class="gramblock">
        <img class="image" ng-src="{{ gram.url }}">
        <span class="hidden ><i fa fa-thumbs-up fa-5x"></i></span>
        <p class="likenum"><i class="fa fa-thumbs-up"></i>{{ gram.likes }}</p>
      </div>
    `,
    link: function (scope, element, attrs) {
      element.on('dblclick', function () {
        element.find('span').removeClass('hidden').addClass('shown');
        $timeout(function() {
          element.find('span').removeClass('shown').addClass('hidden');
        }, 1000);
        InstaService.addLike(scope.gram).then( (res) => {
          console.log(res);
        });
      });
    }
  };

};

gramItem.$inject = ['InstaService', '$timeout'];

export default gramItem;



// e.find('div').addClass('show');

// $timeout(function() {
//   element.removeClass('liked');
// } 1000);

// opacity: 0;

