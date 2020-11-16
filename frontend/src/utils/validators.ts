// source: https://emailregex.com/
const scaryEmailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
export const email = (email: string): string | void => {
  if (!email.includes('@')) {
    return `Email should contain '@' character`;
  }

  if (!scaryEmailRegex.test(email)) {
    return 'Invalid email';
  }
};

export const password = (password: string): string | void => {
  if (password.length < 8 || password.length > 30) {
    return 'Password must be between 8 and 30 characters';
  }
};

export const comment = (comment: string): string | void => {
  if (comment.length < 3 || comment.length > 300) {
    return 'Comment must be between 3 and 300 characters';
  }
};
