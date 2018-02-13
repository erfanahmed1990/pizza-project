var Pizza = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/pizza');
var pizzas = [

    new Pizza({
        imagePath: 'http://www.aussiepizzas.com/PIZZADELIVERY/wp-content/uploads/2014/12/images.jpg',
        title: 'Mexicana Pizza',
        description: 'spicy',
        price: 20




    }),


    new Pizza({
        imagePath: 'http://www.aussiepizzas.com/PIZZADELIVERY/wp-content/uploads/2014/12/images.jpg',
        title: 'Mexicana Pizza',
        description: 'spicy',
        price: 20



    }),


    new Pizza({
        imagePath: 'http://www.aussiepizzas.com/PIZZADELIVERY/wp-content/uploads/2014/12/images.jpg',
        title: 'Mexicana Pizza',
        description: 'spicy',
        price: 20



    }),




    new Pizza({
        imagePath: 'http://www.aussiepizzas.com/PIZZADELIVERY/wp-content/uploads/2014/12/images.jpg',
        title: 'Mexicana Pizza',
        description: 'spicy',
        price: 20



    }),




    new Pizza({
        imagePath: 'http://www.aussiepizzas.com/PIZZADELIVERY/wp-content/uploads/2014/12/images.jpg',
        title: 'Mexicana Pizza',
        description: 'spicy',
        price: 20



    }),





    new Pizza({
        imagePath: 'http://www.aussiepizzas.com/PIZZADELIVERY/wp-content/uploads/2014/12/images.jpg',
        title: 'Mexicana Pizza',
        description: 'spicy',
        price: 20



    })



];
var done = 0;
for (var i = 0; i< pizzas.length; i++) {
    pizzas[i].save(function (err, result) {

        done++;
        if (done === pizzas.length){

            exit();
        }
    });

}
function  exit(){
    mongoose.disconnect();


}

