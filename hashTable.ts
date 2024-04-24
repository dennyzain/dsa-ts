/*
 ? The main differences between new Map() and = {} are:

Key types: In a Map, the keys can be of any data type, including objects and other non-primitive types. In a regular object {}, the keys are always converted to strings.

Order: Map preserves the insertion order of key-value pairs, while regular objects do not have a guaranteed order.

Size: The Map object has a size property that returns the number of key-value pairs, while regular objects do not have a built-in way to get the number of properties.

Methods: Map has methods like set(), get(), has(), delete(), clear(), etc., to manipulate the key-value pairs. Regular objects do not have these methods, but you can define your own methods or use object-related methods like Object.keys(), Object.values(), etc.

*/

export default class HashTable {
  private table: { [key: string]: [string, string][] } = {};

  // Helper function to calculate a simple hash
  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.table.length;
    }
    return hash;
  }

  // Time complexity O(1)
  public set(key: string, value: string): void {
    const hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = [];
    }
    this.table[hash].push([key, value]);
  }

  // Time complexity O(1)
  public get(key: string): string {
    const hash = this.hash(key);
    if (!this.table[hash]) return "not found";
    const bucket = this.table[hash];
    for (const [k, v] of bucket) {
      if (k === key) return v;
    }
    return "not found";
  }

  // Time complexity O(1)
  public delete(key: string): void {
    const hash = this.hash(key);
    if (!this.table[hash]) return;
    const bucket = this.table[hash];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }

  // Time complexity O(n)
  public size(): number {
    let size = 0;
    for (const bucket of Object.values(this.table)) {
      size += bucket.length;
    }
    return size;
  }

  // Time complexity O(n)
  public traverse(): string {
    let result = "";
    for (const bucket of Object.values(this.table)) {
      for (const [key, value] of bucket) {
        result += `${key}: ${value}\n`;
      }
    }
    return result || "its empty";
  }
}
