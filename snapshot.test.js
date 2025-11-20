// los tests de snapshot evitan tener que actualizar el test
// cada vez que el resultado cambia
// si actualizo los datos debo usar la opcion -- -u
// para actualizar los snapshots

var items = [
  { id: 1, name: 'Item One', stock: 10 },
  { id: 2, name: 'Item Two', stock: 5 },
  { id: 3, name: 'Item Two', stock: 8 },
  { id: 4, name: 'Item Four', stock: 0 },
  { id: 5, name: 'Item Two', stock: 15 }
];

// filtra por llave y termino
function filterItems(arr, ket, term) {
    return arr.filter(function(obj) {
        return obj[ket] === term;                                   
    })
}

// sin snapshot
/*
test('filter by id snapshot', () => {
    expect(filterItems(items, 'id', 2)).toEqual([
        { id: 2, name: 'Item Two', stock: 5 }
    ])
});

test('filter by name', () => {
    expect(filterItems(items, 'name', 'Item Two')).toEqual([
        { id: 2, name: 'Item Two', stock: 5 },
        { id: 3, name: 'Item Two', stock: 8 }
    ])
});
*/

// con snapshot
// crea una carpeta snapshot con los resultados esperados
test('filter by id snapshot', () => {
    expect(filterItems(items, 'id', 2)).toMatchSnapshot();
});

test('filter by name snapshot', () => {
    expect(filterItems(items, 'name', 'Item Two')).toMatchSnapshot();
});
