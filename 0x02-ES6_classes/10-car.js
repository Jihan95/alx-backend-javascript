export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  set brand(brand) {
    this._brand = brand;
  }

  set motor(motor) {
    this._motor = motor;
  }

  set color(color) {
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    return new this.constructor(this.brand, this.motor, this.color);
  }
}
