const setUp = () => console.log('Setting up before test');
const cleanUp = () => console.log('Cleaning up after test');

describe ('new account creation tests', () => {
    beforeAll(() => setUp());
    afterAll(() => cleanUp());
    
    test ('create new account test 1', () => {
        const acount = 'account1'; 
        expect(acount).toEqual('account1');
    });
    test ('create new account test 2', () => {
        const acount = 'account2';
        expect(acount).toEqual('account2');
    });
});