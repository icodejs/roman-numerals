requirejs.config({
    baseUrl: 'js',

    paths: {
        roman: 'roman',
        numbers: 'numbers'
    }
});

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
