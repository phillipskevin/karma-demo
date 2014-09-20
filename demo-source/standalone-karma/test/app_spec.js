describe('factorial', function () {
    it('(0) should be 1', function () {
        expect(factorial(0)).toBe(1);
    });

    it('(1) should be 1', function () {
        expect(factorial(1)).toBe(1);
    });

    it('(2) should be 2', function () {
        expect(factorial(2)).toBe(2);
    });

    it('(3) should be 6', function () {
        expect(factorial(3)).toBe(6);
    });

    it('(4) should be 24', function () {
        expect(factorial(4)).toBe(24);
    });
});
