export const validEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
export const validPhoneNumber = new RegExp(
  "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
);
