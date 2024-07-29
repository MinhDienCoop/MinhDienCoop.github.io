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
