class Stack {
  constructor(private stack: number[] = []) {}

  // ------ time complexity of push is O(1)
  push(value: number) {
    this.stack.push(value);
  }

  // ------ time complexity of pop is O(1)
  pop() {
    return this.stack.pop();
  }

  // ------ time complexity of peek is O(1)
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

export default Stack;
