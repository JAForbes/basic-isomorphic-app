var m = require('mithril')

var vm = {
    clicks: m.prop(0)
}

function onclick(){
    vm.clicks(vm.clicks() + 1)
}

function view(ctrl){
    return m('div.content'
        ,m('h1', 'This is the content')
        ,m('button', { onclick: onclick }, 'Click Me')
        ,m('p', 'Clicks: '+ vm.clicks() )
    )
}

module.exports = {
    view: view
    ,vm: vm
}