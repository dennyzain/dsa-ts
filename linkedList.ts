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

  append(value: number) {
    const newNode = new Node(value);

    // If the linked list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return;
    }

    // Make the last item refer to the newly added node
    if (this.tail) {
      this.tail.next = newNode;
    }
    // Make the newly added node the last/tail node
    this.tail = newNode;
  }

  prepend(value: number): this {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;

    return this;
  }

  deleteHead() {
    if (!this.head) return;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  traversing() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }

  accessing() {}

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
