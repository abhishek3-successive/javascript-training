const _ = require('lodash')

function add (a , b){
 return _.add(a,b)
}

function sub (a , b){
    return _.subtract(a,b)
}

module.exports = { add, sub };