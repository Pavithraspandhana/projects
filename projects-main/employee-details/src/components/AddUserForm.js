import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = {
    id: null,
    designation: "",
    company: "",
    workFrom: "",
    workTill: "",
    city: "",
    image: "",
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.designation || !user.company) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <h2>Add User</h2>
      <div className="form-group">
        <label>Designation</label>
        <input
          type="text"
          name="designation"
          value={user.designation}
          onChange={handleInputChange}
          pattern="[a-zA-Z]+"
          required
        />
      </div>
      <div className="form-group">
        <label>Company</label>
        <input
          type="text"
          name="company"
          value={user.company}
          onChange={handleInputChange}
          pattern="[a-zA-Z]+"
          required
        />
      </div>
      <div className="form-group">
        <label>WorkFrom</label>
        <input
          type="text"
          name="workFrom"
          value={user.workFrom}
          onChange={handleInputChange}
          pattern="[a-zA-Z0-9-]+"
          required
        />
      </div>
      <div className="form-group">
        <label>WorkTill</label>
        <input
          type="text"
          name="workTill"
          value={user.workTill}
          onChange={handleInputChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
      </div>

      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          name="city"
          value={user.city}
          onChange={handleInputChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
      </div>
      <button className="modal-button">Add</button>
    </form>
  );
};

export default AddUserForm;
