"use strict";

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(value) {
    if (typeof value !== "number") {
      throw new TypeError("Incorrect variable type!");
    }
    this._from = value;
  }
  get from() {
    return this._from;
  }
  set to(value) {
    if (typeof value !== "number") {
      throw new TypeError("Incorrect variable type!");
    }
    this._to = value;
  }
  get to() {
    return this._to;
  }
  get getRangeLimits() {
    return [this.from, this.to];
  }
  get getRangeArray() {
    let newArray = [];
    if (this.to < 0) {
      for (let i = this.from; i >= this.to; i--) {
        newArray.push(i);
      }
    } else {
      for (let i = this.from; i <= this.to; i++) {
        newArray.push(i);
      }
    }
    return newArray;
  }
  validate(number) {
    if (number < this.from || number > this.to) {
      throw new RangeError("Number is out of range!");
    }
    return number;
  }
}

const test = new RangeValidator(10, -20);
