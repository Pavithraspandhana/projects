import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import DirectoryTable from "./components/DirectoryTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import Pagination from "./components/Pagination";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: null,
    designation: "",
    company: "",
    workFrom: "",
    workTill: "",
    city: "",
    image: "",
  };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    const data = [
      {
        id: 1,
        designation: "Engineer",
        company: "accenture",
        workFrom: "10may2015",
        workTill: "20june2021",
        city: "bangalore",
        image: "https://randomuser.me/api/portraits/thumb/lego/1.jpg",
      },
      {
        id: 2,
        designation: "tester",
        company: "wipro",
        workFrom: "10may2015",
        workTill: "20june2021",
        city: "bangalore",
        image: "https://randomuser.me/api/portraits/thumb/lego/1.jpg",
      },

      {
        id: 3,
        designation: "application developer",
        company: "testyantra",
        workFrom: "10may2015",
        workTill: "20june2021",
        city: "bangalore",
        image: "https://randomuser.me/api/portraits/thumb/lego/1.jpg",
      },

      {
        id: 4,
        designation: "quality engineer",
        company: "Manyata",
        workFrom: "10may2015",
        workTill: "20june2021",
        city: "bangalore",
        image: "https://randomuser.me/api/portraits/thumb/lego/1.jpg",
      },

      {
        id: 5,
        designation: "associate director ",
        company: "EY",
        workFrom: "10may2015",
        workTill: "20june2021",
        city: "bangalore",
        image: "https://randomuser.me/api/portraits/thumb/lego/1.jpg",
      },

      {
        id: 6,
        designation: "senior developer",
        company: "Infosys",
        workFrom: "10may2015",
        workTill: "20june2021",
        city: "bangalore",
        image: "https://randomuser.me/api/portraits/thumb/lego/1.jpg",
      },

      {
        id: 7,
        designation: "software engineer",
        company: "Globalworld",
        workFrom: "10may2015",
        workTill: "20june2021",
        city: "bangalore",
        image: "https://randomuser.me/api/portraits/thumb/lego/1.jpg",
      },

      {
        id: 8,
        designation: "junior developer",
        company: "evolet",
        workFrom: "10may2015",
        workTill: "20june2021",
        city: "bangalore",
        image: "https://randomuser.me/api/portraits/thumb/lego/1.jpg",
      },

      {
        id: 9,
        designation: "developer",
        company: "testyantrs",
        workFrom: "10may2015",
        workTill: "20june2021",
        city: "bangalore",
        image: "https://randomuser.me/api/portraits/thumb/lego/1.jpg",
      },
    ];
    setUsers(data);
  }, []);

  // incrementing ids + adding placeholder image manually
  // TODO: update id and image handling when tying this to a database
  const addUser = (user) => {
    toggle();
    user.id = users.length + 1;
    user.image = "https://randomuser.me/api/portraits/thumb/lego/1.jpg";
    setUsers([user, ...users]);
  };

  const editUser = (user) => {
    setEditing(true);
    toggle();
    setCurrentUser({
      id: user.id,
      designation: user.designation,
      company: user.company,
      workFrom: user.workFrom,
      workTill: user.workTill,
      city: user.city,
      image: user.image,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    toggle();
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <div className="container">
        <button className="button-add" onClick={toggle}>
          Add User
        </button>
      </div>
      {editing ? (
        <Modal
          isShowing={isShowing}
          hide={toggle}
          content={
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          }
        />
      ) : (
        <Modal
          isShowing={isShowing}
          hide={toggle}
          content={<AddUserForm addUser={addUser} />}
        />
      )}
      <DirectoryTable
        users={currentUsers}
        editUser={editUser}
        deleteUser={deleteUser}
      />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </>
  );
};

export default App;
