import React from "react";
import { loginEmailPassword } from "./firebase";


function App() {

  function handleSubmit (event){
    event.preventDefault()

    let email = event.target[0].value
    let password = event.target[1].value

    loginEmailPassword(email, password)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name = {'email'} type={'email'} placeholder={'Email here'} required></input>
        <input name = {'password'} type={'password'} required></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
