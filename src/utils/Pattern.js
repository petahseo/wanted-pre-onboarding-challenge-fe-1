// pattern = "/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/";
// pattern = ".{8,}";

// export const emailPattern = (email) => {
//   const regexEmail = /(?=.*[@])(?=.*[.])/;
//   if (!regexEmail.test(email)) {
//     return false;
//   }
//   return true;
// };

// export const passwordPattern = (password) => {
//   if (password.length <= 8) {
//     return false;
//   }
//   return true;
// };

const Pattern = {
  emailPattern:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  passwordPattern: /^(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
};

export default Pattern;
