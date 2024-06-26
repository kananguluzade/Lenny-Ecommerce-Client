export default function Validation(user) {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (user.username === "") {
    errors.username = "Name is Required!";
  }

  if (user.email === "") {
    errors.email = "Email is Required!";
  } else if (!email_pattern.test(user.email)) {
    errors.email = "Email did not match";
  }

  if (user.password === "") {
    errors.password = "Password is Required!";
  } else if (!password_pattern.test(user.password)) {
    errors.password = "Please use minimum 10 letters (!,@,$,*,A,z,1,2,3)";
  }

  return errors;
}
