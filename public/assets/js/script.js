$(document).ready(function(){
    $(".devour-button").on("click", function(event) {
        event.preventDefault();

        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function(){
            location.reload();
        })
    });

    $(".add-burger-button").on("click", function(event){
        event.preventDefault();

        console.log("post button clicked");
        let newBurger = {
            burger_name: $("#newBurger").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("new burger added");
            location.reload();
        });
    });
})