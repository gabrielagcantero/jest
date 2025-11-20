// asumo que trae datos de una API
const fetchDatafromAPI = require('./fetchData');

// test asincrono
test('the data is fetched successfully', async () => {
    const data = await fetchDatafromAPI();
    expect(data).toBe("Data fetched successfully!");
});