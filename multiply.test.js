const multiply = require('./multiply');

//agrupo los tests positivos
describe('test multiply positive scenarios', () => {
    //un test simple. corre con npm run test
    test('multiply 2*3 should return 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });
});

//otro test
//con toEqual corre, con toBe no
test ('object example', () => {
    const data = {first: 1};
    data['second'] = 2;
    expect (data).toEqual({first: 1, second: 2});
});

/*
test ('object example2', () => {
    const data = {first: 1};
    data['second'] = 2;
    expect (data).toBe({first: 1, second: 2});
});
*/

test('multiply 4*3 should not return 6', () => {
        expect(multiply(4, 3)).not.toBe(6);
    });
