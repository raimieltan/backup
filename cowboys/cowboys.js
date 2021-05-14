describe('Scored Tests', () => {
    it('test___CS___case_1', () => {

        assert.deepStrictEqual(cowboy(10, 5), true);
    })

    it('test___CS___case_2', () => {

        assert.deepStrictEqual(cowboy(7, 4), false);
    })

    it('test___CS___case_3', () => {

        assert.deepStrictEqual(cowboy(100, 40), true);
    })

    it('test___CS___case_4', () => {

        assert.deepStrictEqual(cowboy(1500, 751), false);
    })

    it('test___CS___case_5', () => {

        assert.deepStrictEqual(cowboy(0, 1), false);
    })
    

})