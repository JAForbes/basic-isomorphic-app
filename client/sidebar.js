var m = require('mithril')

var Main = {
    controller: function(){

    }
    ,view: function(){
        return m('div.sidebar',
            m('h1', 'This is the sidebar')
        )
    }
}

module.exports = Main