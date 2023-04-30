import React from "react";
import "../App.css";
import users from "../../users";

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      users,
      name: "",
      status: "",
      select: "id",
      active: null,
    };
  }
  render() {
    const search = ({ target: { value } }) => {
      let res = users.filter((user) =>
        `${user[this.state.select]}`.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({ users: res });
    };

    const select = ({ target: { value } }) => {
      this.setState({ select: value });
    };

    const delUser = (id) => {
      let res = this.state.users.filter((user) => {
        return user.id !== id;
      });
      this.setState({ users: res });
    };

    const addInput = ({ target: { name, value } }) => {
      this.setState({ [name]: value });
    };

    const addUser = () => {
      let newUser = {
        id: this.state.users.length + 1,
        name: this.state.name,
        status: this.state.status,
      };

      this.setState({
        name: " ",
        status: " ",
        users: [...this.state.users, newUser],
      });
    };

    const userEdit = ({ id, name, status }, isActive) => {
      if (isActive) {
        let res = this.state.users.map((user) =>
          user.id === this.state.active?.id
            ? { ...user, name: this.state.name, status: this.state.status }
            : user
        );
        this.setState({ active: null, users: res });
      } else {
        this.setState({
          name: name,
          status: status,
          active: { id, name, status },
        });
      }
    };
    return (
      <div>
        <p className="titles"> ReactCRUD</p>
        <h1>Name: {this.state.name}</h1>
        <h1>Status: {this.state.status}</h1>
        Search:{" "}
        <select onChange={select} name="select">
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="status">Status</option>
        </select>
        <input onChange={search} type="text" placeholder="search" /> <br />
        Name:{" "}
        <input
          value={this.state.name}
          name="name"
          onChange={addInput}
          type="text"
          placeholder="Name"
        />
        Status:{" "}
        <input
          value={this.state.status}
          name="status"
          onChange={addInput}
          type="text"
          placeholder="status"
        />
        <button onClick={addUser}>add</button>
        <br />
        {/* Search: <input type="text" placeholder="search" /> <br /> */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(({ id, name, status }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    {this.state.active?.id === id ? (
                      <input
                        onChange={addInput}
                        name="name"
                        value={this.state.name}
                        type="text"
                      />
                    ) : (
                      name
                    )}
                  </td>
                  <td>
                    {this.state.active?.id === id ? (
                      <input
                        onChange={addInput}
                        name="status"
                        value={this.state.status}
                        type="text"
                      />
                    ) : (
                      status
                    )}
                  </td>
                  <td>
                    <button onClick={() => delUser(id)}>delete</button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        userEdit(
                          { id, name, status },
                          this.state.active?.id === id
                        )
                      }
                    >
                      {this.state.active?.id === id ? "save" : "edit"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
