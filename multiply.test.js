const multiply = require('./multiply');

//agrupo los tests positivos
describe('test multiply positive scenarios', () => {
    //un test simple. corre con npm run test
    test('multiply 2*3 should return 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });
});