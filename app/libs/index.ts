import { message } from "antd";

export const copyButton = (label: string, value: string) => {
  console.log("value: ", value);
  const tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, 99999);

  try {
    document.execCommand("copy");
    message.success(`Copied ${label}`);
  } catch (err) {
    message.error(`${err} copy!`);
  }

  document.body.removeChild(tempInput);
};

export const getLocalStorage = (key: string) => {
  const localItem = localStorage.getItem(key);

  if (localItem) return localItem;
  else return null;
};

export const formatCurrency = (
  iso: string,
  languageIso: string,
  price: number
) => {
  const result = price.toLocaleString(languageIso, {
    style: "currency",
    currency: iso,
  });
  return result;
};

export const convertCurrency = async (
  isoFrom: string,
  isoTo: string,
  price: number
) => {
  const api = "https://api.exchangerate-api.com/v4/latest/USD";

  try {
    const response = await fetch(`${api}`);
    const currency = await response.json();

    const fromRate = currency.rates[isoFrom];
    const toRate = currency.rates[isoTo];
    const result = ((toRate / fromRate) * price).toFixed(2);

    console.log("result: ", result);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rất hữu ích khi bạn muốn xử lý lỗi ở nơi khác
  }
};
