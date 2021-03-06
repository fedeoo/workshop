import ChainingHashTable from '../ChainingHashTable';

describe('ChainingHashTable', () => {
  it('should be able to get correct value after setting key and value', () => {
    const hashTable = new ChainingHashTable();
    hashTable.set('shark', { type: 'fish' });
    hashTable.set('tiger', { type: 'animal' });

    expect(hashTable.get('shark')).toEqual({
      type: 'fish',
    });
  });

  it('return correct hash code', () => {
    const hashTable = new ChainingHashTable();
    expect(hashTable.hashCode('A')).toEqual(0x41);
    expect(hashTable.hashCode('Hello')).toEqual(0x042628b2);
  });

  it('should return falsy after deleting item by key', () => {
    const hashTable = new ChainingHashTable();
    hashTable.set('shark', { type: 'fish' });
    hashTable.set('tiger', { type: 'animal' });

    hashTable.delete('shark');
    expect(hashTable.get('shark')).toBeFalsy();
  });

  it('should work even the key has same hash value', () => {
    const hashTable = new ChainingHashTable();
    hashTable.set('dog', { type: 'animal' });
    hashTable.set('bird', { type: 'bird' });
    hashTable.set('tiger', { type: 'animal' });

    hashTable.delete('tiger');
    expect(hashTable.get('shark')).toBeFalsy();
    expect(hashTable.get('bird')).toBeTruthy();
  });
});
