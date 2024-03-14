class Stack {
  constructor(private stack: number[] = []) {}
  push(value: number) {
    this.stack.push(value);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

export default Stack;
