export function moneyFormatter(price: number | undefined): string {
  const defaultValue = 0;
  let formatedPrice = null;

  if (price) {
    formatedPrice = price.toLocaleString("en-US", { style: "currency", currency: "USD" });
  } else {
    formatedPrice = defaultValue.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  return formatedPrice;
}