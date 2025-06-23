const _ = require('lodash/add')
const __ = require('lodash/subtract')

function add (a , b){
 return _(a,b)
}

function sub (a , b){
    return __(a,b)
}

module.exports = { add, sub };