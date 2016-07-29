var render = require('mithril-node-render')
var m = require('mithril')
var app = require('../client/main')
var html = require('html')
var fs = require('fs')

var page = function(content){
    return m('html'
        ,m('head')
        ,m('body'
            ,content
            ,m('script[src=bundle.js]')
        )
    )
}

fs.writeFileSync('dist/index.html'
    ,html.prettyPrint(
        render(
            page(
                m.component(app)
            )
        )
    )
)

