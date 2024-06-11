'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const priceObjects = prices.map((price) => {
  return { price: price, salePrice: price / 2 };
});
console.log('price Objects: ', priceObjects);
const formattedPrices = prices.map((price) => {
  let priceStrArr = price.toString().split('.');
  let formattedPrice = '';
  if (priceStrArr.length === 1) {
    formattedPrice = `$${priceStrArr[0]}.00`;
  } else {
    let cents =
      priceStrArr.length === 2
        ? `${priceStrArr[1][0]}0`
        : `${priceStrArr[1][1]}`;
    formattedPrice = `$${priceStrArr[0]}.${cents}`;
  }
  return formattedPrice;
});
console.log('formatted prices: ', formattedPrices);
