// !take infos from inputs on Login and Signup pages
export const handleUserChange = ({ target }) => {
  const { name, value } = target;
  setUser((currentUser) => ({
    ...currentUser,
    [name]: value,
  }));
};

// !set user details on localStorage
export const storeUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

// !get user details from localStorage
export const getUserData = () => {
  const stringifiedUser = localStorage.getItem("user") || '""';
  return JSON.parse(stringifiedUser || {});
};
