define(['roman'], function (roman) {

    describe('Roman', function () {
        it('Should have a value for numbers 1, 5, and 10', function () {
            expect(roman.characters.one  === 'I').toBe(true);
            expect(roman.characters.five  === 'V').toBe(true);
            expect(roman.characters.ten  === 'X').toBe(true);
        });
        it('Should return the correct roman numerials for 1 to 3',function(){
            expect(roman.calculate(1) === 'I').toBe(true);
            expect(roman.calculate(2) === 'II').toBe(true);
            expect(roman.calculate(3) === 'III').toBe(true);
            expect(roman.calculate(4) === 'III').toBe(false);
            // http://stackoverflow.com/questions/9500586/does-jasmines-tothrow-matcher-require-the-argument-to-be-wrapped-in-an-anonymou
            expect(roman.calculate).toThrow();
        });
    });

});


