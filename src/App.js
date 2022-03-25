import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
import "../src/styles/style.css";
import { API } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listTodos } from "./graphql/queries";
import {
  createTodo as createTodoMutation,
  deleteTodo as deleteTodoMutation,
} from "./graphql/mutations";
import Header from "./components/Header";
// import { HeartSwitch } from "@anatoliygatt/heart-switch";

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialFormState = { name: "", description: "", image: "" };

function App() {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    const apiData = await API.graphql({ query: listTodos });
    setTodos(apiData.data.listTodos.items);
  }

  async function createTodo() {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createTodoMutation,
      variables: { input: formData },
    });
    setTodos([...todos, formData]);
    setFormData(initialFormState);
  }

  async function deleteTodo({ id }) {
    const newTodosArray = todos.filter((todo) => todo.id !== id);
    setTodos(newTodosArray);
    await API.graphql({
      query: deleteTodoMutation,
      variables: { input: { id } },
    });
  }

  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;


  // const [checked, setChecked] = useState(false);


   const [darkMode, setDarkMode] = useState(false);


/*     <DarkModeProvider>
      <Container />
      </DarkModeProvider> */

  return (
    <div className={`${darkMode && "dark-mode"}`}>


      <div className="main">
        <div className="container-fluid">
          <Header handleToggleDarkMode={setDarkMode} />
        </div>

        <div className="App"></div>

        <div className="content container-fluid">
          <div className="note-container">
            <div className="container-fluid" id="wrap">
              <div id="note">
                <div className="text-input">
                  <input
                    id="name-input"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Note name"
                    value={formData.name}
                  />
                </div>
                <div className="text-input">
                  <textarea
                    id="content-input"
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Note description"
                    value={formData.description}
                  />
                </div>
                <div className="note-btn">
                  <button id="save-btn" onClick={createTodo}>
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="list-container">
            <div id="list-box">
              {todos.map((todo) => (
                <div id="card-wrap">
                  <div id="card" key={todo.id || todo.name}>
                    <h2>{todo.name}</h2>
                    <p>{todo.description}</p>
                   
                    <div id="footer-container">
                      <button id="delete-btn" onClick={() => deleteTodo(todo)}>
                        Delete
                      </button>
                      <small>{date}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="signout">
        <div className="signout-btn">
          <AmplifySignOut />
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
