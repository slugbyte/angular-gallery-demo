'use strict'

require('!!file?name=[name].[ext]!./html/index.html')
require('./scss/base.scss')

const angular = require('angular')
angular.module('demoApp', [])
// config
// run
// services
require('./service/imageService.js')
// controllers
// directives


require('./component/main')
require('./component/header')
require('./component/gallery')
require('./component/social-status')
require('./component/list-item')
require('./component/thumb-item')
