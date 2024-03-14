import { describe, it, expect } from "bun:test";
import LinkedList from "./linkedList";

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

  // it("can be deleted", () => {
  //   const list = new LinkedList();
  //   list.append(3);
  //   list.append(4);
  //   list.prepend(1);
  //   list.prepend(2);
  //   list.deleteHead();
  //   expect(list.head?.data).toBe(2);
  //   expect(list.tail?.data).toBe(4);
  // });

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
});
