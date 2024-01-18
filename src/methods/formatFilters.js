export function currency(num) {
  const decimalNumber = parseFloat(num, 10);
  return decimalNumber.toLocaleString('zh-Hant-TW',{
    minimumFractionDigits:2,
    maximumFractionDigits:2,
  });
}

export function date(time) {
  const localDate = new Date(time * 1000);
  return localDate.toLocaleDateString();
}

// bug 數字沒有正確轉換為兩個小數點以及轉後數字不正確