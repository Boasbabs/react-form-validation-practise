// Regex for email validation
export const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

// Regex for phone validation
export const validPhoneNumberRegex = RegExp(/^[2-9]\d{2}-\d{3}-\d{4}$/);

// Regex for url validation
export const validUrlRegex = RegExp(
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
);

// Regex for Name containing only Alphabets with letters between 3 and 30 inclusive
export const validNameRegex = RegExp(/^[a-zA-Z]{3,30}$/);
