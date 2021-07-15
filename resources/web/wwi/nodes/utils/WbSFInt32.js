export default class WbSFInt32 {
  constructor(value = 0) {
    if (typeof value !== 'number')
      throw new Error('Expected number in WbSFInt32 constructor.');

    this.value = value;
  }

  value() {
    return this.value;
  };

  asX3d() {
    return this.value.toString();
  };
};
