import angular from 'angular';
import '../app-core/index';

import AddController from './controllers/add.controller';

import InstaService from './services/insta.service';

import gramItem from './directives/gram.directive';

angular
  .module('app.grams', ['app.core'])
  .controller('AddController', AddController)
  .service('InstaService', InstaService)
  .directive('gramItem', gramItem)
;