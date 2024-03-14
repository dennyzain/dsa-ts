class Queue {
  constructor(private stack: number[] = []) {}
  enqueue(value: number) {
    this.stack.push(value);
  }
  dequeue() {
    return this.stack.shift();
  }

  peek() {
    return this.stack[0];
  }
}

export default Queue;
