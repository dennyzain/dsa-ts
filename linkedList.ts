class Node {
  constructor(public data: number, public next: Node | null = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head: Node | null;
  tail: Node | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // ------ time complexity of append is O(1)
  append(value: number) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return;
    }

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  // ------ time complexity of prepend is O(1)
  prepend(value: number): this {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;

    return this;
  }

  // ------ time complexity of delete is O(1)
  deleteHead() {
    if (!this.head) return;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  // ------ time complexity of traverse(visiting all of the nodes) is O(n)
  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }

  // ------ time complexity of find is O(n)
  find(value: number) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) {
        return currentNode.data;
      }
      currentNode = currentNode.next;
    }

    return "sorry the number doesn't exist";
  }

  toArray() {
    const items = [];
    let currentNode = this.head;

    while (currentNode) {
      items.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return items;
  }
}

export default LinkedList;
