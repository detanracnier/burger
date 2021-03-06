let orm = require("../config/orm.js");

let burger = {
    all: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        })
    },
    add: function(name, cb){

        orm.insertOne("burgers","burger_name", [name],function(res){
            cb(res);
        })
    },
    eat: function(condition, cb){
        let values = { devoured: true };
        orm.updateOne("burgers", values, condition, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;