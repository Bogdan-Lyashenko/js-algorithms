import OpenAddressingCollisionResolution from './open-addressing.js';
import ChainingCollisionResolution from './chaining.js';
import HashTable from './hash-table.js';

class Example {
  constructor() {
    this.chainingCollisionResolution = new ChainingCollisionResolution();
    this.openAddressingCollisionResolution = new OpenAddressingCollisionResolution();
  }

  testChainingCollisionResolution() {
    var hashTable = new HashTable(this.chainingCollisionResolution);

    hashTable.insertValue('ValueItem1', ['ValueItem1', 21]);
    hashTable.insertValue('ValueItem2', ['ValueItem2', 22]);
    hashTable.insertValue('ValueItem3', ['ValueItem3', 23]);
    hashTable.insertValue('ValueItem4', ['ValueItem4', 24]);
    hashTable.insertValue('ValueItem5', ['ValueItem5', 25]);
    hashTable.insertValue('ValueItem6', ['ValueItem6', 26]);
    hashTable.insertValue('ValueItem7', ['ValueItem7', 27]);

    console.dir(hashTable.storage);
    console.log(hashTable.getValue('ValueItem6'));
  }

  testOpenAddressingCollisionResolution() {
    var hashTable = new HashTable(this.openAddressingCollisionResolution);

    hashTable.insertValue('ValueItem1', ['ValueItem1', 21]);
    hashTable.insertValue('ValueItem2', ['ValueItem2', 22]);
    hashTable.insertValue('ValueItem3', ['ValueItem3', 23]);
    hashTable.insertValue('ValueItem4', ['ValueItem4', 24]);
    hashTable.insertValue('ValueItem5', ['ValueItem5', 25]);
    hashTable.insertValue('ValueItem6', ['ValueItem6', 26]);
    hashTable.insertValue('ValueItem7', ['ValueItem7', 27]);

    console.dir(hashTable.storage);
    console.log(hashTable.getValue('ValueItem6'));
  }
}

new Example().testChainingCollisionResolution();
