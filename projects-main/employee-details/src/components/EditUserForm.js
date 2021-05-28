import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <div className="form-group">
        <h2>Edit User</h2>
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
        <label>workTill</label>
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
        <label>city</label>
        <input
          type="text"
          name="city"
          value={user.city}
          onChange={handleInputChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
      </div>
      <button className="modal-button">Update user</button>
    </form>
  );
};

export default EditUserForm;
