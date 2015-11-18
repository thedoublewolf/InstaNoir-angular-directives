import angular from 'angular';
import 'angular-ui-router';
import 'angular-messages';

import config from './config';

import PARSE from './constants/parse.constant';

import InstaService from './services/insta.service';

import HomeController from './controllers/home.controller';
import AddController from './controllers/add.controller';

import gramItem from './directives/gram.directive';

angular
  .module('app', ['ui.router', 'ngMessages'])
  .config(config)
  .constant('PARSE', PARSE)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .service('InstaService', InstaService)
  .directive('gramItem', gramItem)
;



