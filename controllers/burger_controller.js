let express = require("express");
let burger = require("../models/burger.js");

//Create router
let router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(result){
        let allData = {
            burgers: result
        };
        res.render("index", allData);
    })
});

router.post("/api/burgers", function (req, res) {
    let newBurger = req.body;
    burger.add(newBurger.burger_name,function(result){
        res.json( { id: result.insertId });
    })
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.eat(condition, function(result){
        if(result.changedRows === 0 ){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

module.exports = router;