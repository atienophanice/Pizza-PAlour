// const order = document.getElementById("btn");
// var checkOut = document.addEventListener("click", function() {

//     var Flavour = parseInt(document.getElementById("flavour").value);
//     var Size = parseInt(document.getElementById("size").value);
//     var Crust = parseInt(document.getElementById("crust").value);
//     var toppings = parseInt(document.getElementById("toppings").value);
//     var quant = parseInt(document.getElementById("quantity").value);
//     var totalCost = (Flavour + Size + Crust + toppings) * quant;

//     alert(`Your order has been received amounting to ${totalCost}`);
//     prompt(`please enter your location.`);
//     alert(`Your order will be delivered in a few, please have some ksh.250 together with total amount for delivery.`)
// });

$(document).ready(function() {
    //form function to submit the users input, calculate total for the order, and prompt the user for some details
    $("#order").submit(function(event) {
        //functions to get user input from the forms
        function flavour() {
            var Flavour = document.getElementById("flavour").value;
            return parseInt(Flavour);
        }

        function size() {
            var Size = document.getElementById("size").value;
            return parseInt(Size);
        }

        function crust() {
            var Crust = document.getElementById("crust").value;
            return parseInt(Crust);
        }

        function toppings() {
            var toppings = document.getElementById("toppings").value;
            return parseInt(toppings);
        }

        function quantity() {
            var quantity = document.getElementById("quantity").value;
            return parseInt(quant);
        }
        z
        //a constructor to create objects/instances of a user's orders
        function Order(fzlavor, size, crust, toppings, quantity) {
            this.newFlavour = flavour;
            this.newSize = size;
            this.newCrust = crust;
            this.newTopping = toppings;
            this.newQuantity = quantity;
        }
        //an object/instance (of the above constructor) to save the users order
        var userInput = new Order(Flavour(), size(), crust(), topping(), number());
        //a variable to store the total expenditure of the user
        var totalCost =
            (userInput.newSize +
                userInput.newCrust +
                userInput.newToppings +
                userInput.newFlavour) *
            userInput.newQuantity;
        //prompts for the user
        alert("Your charges for Pizza" + totalCost);
        prompt("enter your email address");
        prompt("enter your phone number");
        prompt("enter your location");
        alert("Your pizza will be delivered");
        //a method to reset the form after all operations have been completed
        $("#text-center").reset();
        event.preventDefault();
    });
});