import { describe, it, expect } from "bun:test";
import LinkedList from "./linkedList";
import Stack from "./stack";
import Queue from "./queue";
import HashTable from "./hashTable";

describe("LinkedList", () => {
  it("can be created", () => {
    const list = new LinkedList();
    expect(list).toBeTruthy();
  });

  it("can be appended", () => {
    const list = new LinkedList();
    list.append(1);
    expect(list.head?.data).toBe(1);
    expect(list.tail?.data).toBe(1);
  });

  it("can be appended multiple times", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.head?.data).toBe(1);
    expect(list.tail?.data).toBe(3);
  });
  // ------ prepending
  it("can be prepended", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.prepend(0);
    expect(list.head?.data).toBe(0);
    expect(list.tail?.data).toBe(3);
  });

  it("can be prepended multiple times", () => {
    const list = new LinkedList();
    list.append(3);
    list.append(4);
    list.prepend(1);
    list.prepend(2);
    expect(list.head?.data).toBe(2);
    expect(list.tail?.data).toBe(4);
  });

  // --- deleting

  it("can be deleted", () => {
    const list = new LinkedList();
    list.append(3);
    list.append(4);
    list.prepend(1);
    list.prepend(2);
    list.deleteHead();
    expect(list.head?.data).toBe(1);
  });

  // --- to array

  it("can converted to array", () => {
    const list = new LinkedList();
    list.append(3);
    list.append(4);
    expect(list.toArray()).toStrictEqual([3, 4]);
  });

  it("can converted to array", () => {
    const list = new LinkedList();
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
    expect(list.toArray()).toStrictEqual([3, 2, 1]);
  });

  it("can converted to array", () => {
    const list = new LinkedList();
    list.append(3);
    list.append(4);
    list.prepend(1);
    list.prepend(2);
    expect(list.toArray()).toStrictEqual([2, 1, 3, 4]);
  });

  // --- finding

  it("can be find", () => {
    const list = new LinkedList();
    list.append(3);
    list.append(4);
    list.prepend(1);
    list.prepend(2);
    list.traverse();
  });

  // --- accessing
  it("can be find", () => {
    const list = new LinkedList();
    list.append(3);
    list.append(4);
    list.prepend(1);
    list.prepend(2);

    expect(list.find(4)).toBe(4);
  });

  it("can be find", () => {
    const list = new LinkedList();
    list.append(3);
    list.append(4);
    list.prepend(1);
    list.prepend(2);

    expect(list.find(5)).toBe("sorry the number doesn't exist");
  });
});

describe("Stack", () => {
  it("can be created", () => {
    const stack = new Stack();
    expect(stack).toBeTruthy();
  });

  it("can be pushed", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  it("can be pushed", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(5);
    expect(stack.peek()).toBe(5);
  });

  it("can be popped", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(5);
    stack.pop();
    expect(stack.peek()).toBe(1);
  });
});

describe("Queue", () => {
  it("can be created", () => {
    const queue = new Queue();
    expect(queue).toBeTruthy();
  });

  it("can be enqueued", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
  });

  it("can be enqueued", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(5);
    expect(queue.peek()).toBe(1);
  });

  it("can be dequeued", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(5);
    queue.dequeue();
    expect(queue.peek()).toBe(5);
  });
});

describe("HashTable", () => {
  it("can be created", () => {
    const hashTable = new HashTable();
    expect(hashTable).toBeTruthy();
  });

  it("can be set", () => {
    const hashTable = new HashTable();
    hashTable.set("apple", "$3");
    expect(hashTable.get("apple")).toBe("$3");
  });

  it("can be get", () => {
    const hashTable = new HashTable();
    hashTable.set("apple", "$3");
    hashTable.set("mango", "$5");
    hashTable.set("kiwi", "$4");
    expect(hashTable.get("kiwi")).toBe("$4");
  });

  it("can be delete", () => {
    const hashTable = new HashTable();
    hashTable.set("apple", "$3");
    hashTable.set("mango", "$5");
    hashTable.set("kiwi", "$4");
    hashTable.delete("kiwi");
    expect(hashTable.get("kiwi")).toBe("not found");
  });

  it("can be size", () => {
    const hashTable = new HashTable();
    hashTable.set("apple", "$3");
    hashTable.set("mango", "$5");
    hashTable.set("kiwi", "$4");
    expect(hashTable.size()).toBe(3);
  });

  it("can be traverse", () => {
    const hashTable = new HashTable();
    hashTable.set("apple", "$3");
    hashTable.set("mango", "$5");
    hashTable.set("kiwi", "$4");
    expect(hashTable.traverse()).toBeString();
  });
});
