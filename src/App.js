import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
import "../src/styles/style.css";
import { API } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listTodos } from "./graphql/queries";
// import Uploader from "./components/Uploader";
import {
  createTodo as createTodoMutation,
  deleteTodo as deleteTodoMutation,
} from "./graphql/mutations";
// import UploadImages from "./components/image-upload.component";
import Header from "./components/Header";
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

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      await Storage.put(file.name, file, {
        contentType: "image/png",
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  const [darkMode, setDarkMode] = useState(false);

  <input type="file" onChange={onChange} />;

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="main-content">
        <Header handleToggleDarkMode={setDarkMode} />
       
        <div className="App">
          {/* <div className="top" id="signOut-btn">
            <AmplifySignOut />
          </div> */}
          <div className="input-wrapper container-fluid">
            <div className="note-container">
              <div className="text-container">
                <div id="name">
                  <input
                    id="name-input"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Note name"
                    value={formData.name}
                  />
                </div>
                <div id="content">
                  <textarea
                    id="content-input"
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Note description"
                    value={formData.description}
                  />
                </div>
                <div className="btn-container">
                  <button id="create-btn" onClick={createTodo}>
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="picker">
            {/* <UploadImages /> */}

            <div className="content container-fluid">
              <div id="list-box" style={{ marginBottom: 30 }}>
                {todos.map((todo) => (
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: 20,
                      marginBottom: 30,
                      borderRadius: 5,
                    }}
                    key={todo.id || todo.name}
                  >
                    <div className="cardd">
                      <h2>{todo.name}</h2>
                      <p>{todo.description}</p>
                      <div id="delete-container">
                      <button id="delete-btn" onClick={() => deleteTodo(todo)}>
                        Delete
                      </button></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="signout">
          <div className="signout-btn">
        <AmplifySignOut />

</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
