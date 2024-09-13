interface TotalPrice {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = <T extends TotalPrice>({
  price,
  discount,
  isInstallment,
  months,
}: T): number => {
  const a = isInstallment
    ? (price * (1 - discount / 100)) / months
    : 0;
  return a;
};

const price: any = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});

console.log(price); // 6250
