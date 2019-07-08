export default {
  pl: {
    custom: {
      username: {
        required: 'Nazwa użytkownika nie może być pusta',
        alpha_num: 'Nazwa użytkownika może zawierać tylko litery i cyfry',
        min: 'Nazwa użytkownika musi mieć conajmniej 6 znaków',
      },
      password: {
        required: 'Hasło nie może być puste',
        alpha_num: 'Hasło może zawierać tylko litery i cyfry',
        min: 'Hasło musi mieć conajmniej 6 znaków',
      },
      url: {
        required: 'URL nie może być pusty',
        url: 'URL musi być poprawnym adresem',
      },
      feedname: {
        required: 'Nazwa nie może być pusta',
      },
    },
  },
};
