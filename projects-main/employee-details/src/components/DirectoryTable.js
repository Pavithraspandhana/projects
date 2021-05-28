import React, { useState, useMemo } from "react";
import SearchBox from "./SearchBox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useSortableData = (users, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedUsers = useMemo(() => {
    let sortableUsers = [...users];
    if (sortConfig !== null) {
      sortableUsers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableUsers;
  }, [users, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { users: sortedUsers, requestSort, sortConfig };
};

const DirectoryTable = (props) => {
  const { users, requestSort, sortConfig } = useSortableData(props.users);
  const { editUser, deleteUser } = props;
  const [searchValue, setSearchValue] = useState("");
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const searchHandler = (value) => {
    setSearchValue(value);
  };

  let updateUsers = users.filter((user) => {
    return Object.keys(user).some((key) =>
      user[key]
        .toString()
        .toLowerCase()
        .includes(searchValue.toString().toLowerCase())
    );
  });

  return (
    <>
      <div className="container">
        <SearchBox searchHandler={searchHandler} />
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>
                <button
                  type="button"
                  onClick={() => requestSort("designation")}
                  className={getClassNamesFor("designation")}
                >
                  Designation
                </button>
              </th>

              <th>
                <button
                  type="button"
                  onClick={() => requestSort("company")}
                  className={getClassNamesFor("company")}
                >
                  Company
                </button>
              </th>

              <th>
                <button
                  type="button"
                  onClick={() => requestSort("workFrom")}
                  className={getClassNamesFor("workFrom")}
                >
                  Work From
                </button>
              </th>

              <th>
                <button
                  type="button"
                  onClick={() => requestSort("workTill")}
                  className={getClassNamesFor("workTill")}
                >
                  Work Till
                </button>
              </th>

              <th>
                <button
                  type="button"
                  onClick={() => requestSort("city")}
                  className={getClassNamesFor("city")}
                >
                  City
                </button>
              </th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {updateUsers.length > 0 ? (
              updateUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <img
                      src={user.image}
                      alt={user.designation + " " + user.company}
                    />
                  </td>
                  <td>{user.designation}</td>
                  <td>{user.company}</td>
                  <td>{user.workFrom}</td>
                  <td>{user.workTill}</td>
                  <td>{user.city}</td>
                  <td>
                    <IconButton
                      aria-label="edit"
                      onClick={() => {
                        editUser(user);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => deleteUser(user.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>No Users</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DirectoryTable;
