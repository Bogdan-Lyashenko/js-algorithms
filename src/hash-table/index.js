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

        hashTable.insertValue('Bohdan1', ['Bohdan1', 21]);
        hashTable.insertValue('Bohdan2', ['Bohdan2', 22]);
        hashTable.insertValue('Bohdan3', ['Bohdan3', 23]);
        hashTable.insertValue('Bohdan4', ['Bohdan4', 24]);
        hashTable.insertValue('Bohdan5', ['Bohdan5', 25]);
        hashTable.insertValue('Bohdan6', ['Bohdan6', 26]);
        hashTable.insertValue('Bohdan7', ['Bohdan7', 27]);

        console.dir(hashTable.storage);
        console.log(hashTable.getValue('Bohdan6'));
    }

    testOpenAddressingCollisionResolution() {
        var hashTable = new HashTable(this.openAddressingCollisionResolution);

        hashTable.insertValue('Bohdan1', ['Bohdan1', 21]);
        hashTable.insertValue('Bohdan2', ['Bohdan2', 22]);
        hashTable.insertValue('Bohdan3', ['Bohdan3', 23]);
        hashTable.insertValue('Bohdan4', ['Bohdan4', 24]);
        hashTable.insertValue('Bohdan5', ['Bohdan5', 25]);
        hashTable.insertValue('Bohdan6', ['Bohdan6', 26]);
        hashTable.insertValue('Bohdan7', ['Bohdan7', 27]);

        console.dir(hashTable.storage);
        console.log(hashTable.getValue('Bohdan6'));
    }
}

(new Example()).testChainingCollisionResolution();

