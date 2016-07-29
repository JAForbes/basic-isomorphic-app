var m = require('mithril')

var Main = {
    controller: function(){
        var clicks = m.prop(0)

        function onclick(){
            clicks(clicks() + 1)
        }

        return { onclick: onclick , clicks: clicks }
    }
    ,view: function(ctrl){
        return m('div.content'
            ,m('h1', 'This is the content')
            ,m('button', { onclick: ctrl.onclick }, 'Click Me')
            ,m('p', 'Clicks: '+ ctrl.clicks() )
        )
    }
}

module.exports = Main