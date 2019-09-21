class LargestProduct {
  constructor(number) {
    this.number = number;
    this.index = 0;
  }

  getLargestProduct() {
    let greatestProduct = 0;
    let toArray = this.number.split("");
    let digits = toArray.map(e => {
      return parseInt(e);
    });

    for (let i = 0; i < digits.length; i++) {
      let product =
        digits[i] *
        digits[i + 1] *
        digits[i + 2] *
        digits[i + 3] *
        digits[i + 4];
      if (product > greatestProduct) {
        greatestProduct = product;
        this.index = i;
      }
    }
    return greatestProduct;
  }

  getLargestProductIndex() {
    this.getLargestProduct();
    return this.index;
  }
}

module.exports = LargestProduct;
