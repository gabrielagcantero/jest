// String matcher
test ('string inside other string', () => {
    expect('hello world').toMatch(/world/);
});

// numbre matcher
test ('number comparison', () => {
    expect(10).toBeGreaterThan(5);
    expect(10).toBeLessThan(20);
    expect(10).toBeGreaterThanOrEqual(10);
});

// null matcher
test ('null value', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

// array matcher
const shoppingList = [
    'milk', 'bread', 'eggs', 'butter'
];
test ('array contains item', () => {
    expect(shoppingList).toContain('eggs');
    // el Set elimina duplicados
    expect(new Set(shoppingList)).toContain('bread');
});
