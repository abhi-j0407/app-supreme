import { useState } from "react";

const Register = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
      console.log(userForm)
  };

  return (
    <section>
      <form>
        <div>
          <label htmlFor="name">Enter Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userForm.name}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="email">Enter Mail: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userForm.email}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="password">Enter password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userForm.password}
            onChange={handleFormChange}
          />
        </div>
      </form>
    </section>
  );
};

export default Register;
