const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
  ];

  const summary = [];
  for (let obj of sales) {
    let price = obj.price;
    let discount = obj.discount;
    let netPrice = price;
    if (discount) {
        netPrice = price * (1 - discount);
    }
    const newObj = {netPrice: netPrice};
    summary.push(newObj);
  }
  console.log(summary);
  console.log(sales);

  // แบบย่อ
  // sales.forEach((obj) => summary.push({newPrice: obj.price * (1 - (obj.discount || 0))}));