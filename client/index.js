var m = require('mithril')
var Main = require('./main')
var content = require('./content')

global.content = content
global.m = m
m.mount(document.body, Main)