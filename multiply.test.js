// todos los tests del proyecto corren con "npm run test"
// si se agrega el nombre del archivo corre solo ese archivo
// en el JSON se puede agregar "test:watch" para que corra en modo watch

const multiply = require('./multiply');

//agrupo los tests positivos
describe('test multiply positive scenarios', () => {
    //un test simple. el test.only hace que corra solo este test
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
