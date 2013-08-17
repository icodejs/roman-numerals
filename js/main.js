
/*
    In the main.js we use the requirejs.config to setup paths to all our modules


 */

requirejs.config({
    baseUrl: 'js',

    paths: {
        roman: 'roman',
        numbers: 'numbers'
    }
});

/*
    the requirejs function is use to kick everything off (think single page web app)

 */

requirejs([
    'roman',
    'numbers'
], function (
    roman,
    numbers
) {


    console.log(roman);
    console.log(numbers.even());



});
