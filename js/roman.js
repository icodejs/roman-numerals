define(function () {
    //Do setup work here
    var characters = {
        one: 'I',
        five: 'V',
        ten: 'X'
    };
    var calculate = function(num){
        if (isNaN(num)) {
            throw new Error('not a number');
        }

        if (num < 4) {
            return lessThen3(num);
        }
    };

    function lessThen3 (num) {
        var i = 0, result = '';
        for(i=0;i<num;i++){
            result += 'I';
        }
        return result;
    }


    return {
        characters: characters,
        calculate: calculate
    };
});
