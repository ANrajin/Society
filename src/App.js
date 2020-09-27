import React, {Component} from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useParams,
  Navigate
} from "react-router-dom";
import logo from "./hr_logo.png";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import ManageUsers from "./pages/ManageUsers";

import Items from "./pages/Items";
import CreateItem from "./pages/CreateItem";
import ManageItem from "./pages/ManageItem";

const CreateUser = (props) => {
  return (
    <div>
      <h1>Create User</h1>
    </div>
  );
};

const DeleteUser = (props) => {
  return (
    <div>
      <h1>Delete User</h1>
    </div>
  );
};

class EditUser extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //console.log( this.props.params.id );
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.props);
  };

  render() {
    return (
      <div>
        <h1>Edit User</h1>
        <form onSubmit={this.handleSubmit}>
          <div>ID:</div>
          <div>
            Username <br />
            <input type="text" name="username" />
          </div>
          <div>
            Email <br />
            <input type="text" name="email" />
          </div>
          <div>
            <input type="submit" name="submit" value="Submit" />
            <input type="submit" name="cancle" value="Cancle" />
          </div>
        </form>
      </div>
    );
  }
}
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="help" element={<Help />} />

        <Route path="users" element={<ManageUsers />}>
          <Route path="create" element={<CreateUser />} />
          <Route path="delete/:id" element={<DeleteUser />} />
          <Route path=":id" element={<EditUser />} />
        </Route>
        <Route path="items" element={<Items />}>
          <Route path="create-item" element={<CreateItem />} />
          <Route path="manage-item" element={<ManageItem />} />
        </Route>

        <Route path="logout" element={<Navigate to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
