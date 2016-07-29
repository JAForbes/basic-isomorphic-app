var m = require('mithril')

var Sidebar = require('./sidebar')
var Footer = require('./footer')
var Content = require('./content')

var Main = {
    controller: function(){

    }
    ,view: function(){
        return m('div.app'
            ,m.component(Sidebar)
            ,m.component(Content)
            ,m.component(Footer)
        )
    }
}

module.exports = Main