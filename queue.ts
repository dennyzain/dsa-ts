class Queue {
  constructor(private stack: number[] = []) {}
  // ------ time complexity of enqueue is O(1)
  enqueue(value: number) {
    this.stack.push(value);
  }

  // ------ time complexity of dequeue is O(1)
  dequeue() {
    return this.stack.shift();
  }

  // ------ time complexity of peek is O(1)
  peek() {
    return this.stack[0];
  }
}

export default Queue;
