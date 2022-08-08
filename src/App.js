import React, { useState } from "react";
import "./App.css";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";

function App() {

  const[activeUserId, setActiveUserId] = useState(null);
  // activeUserId UserDetail componentinde setActiveUserId ye ise UserList componentinde ihtiyacım var.
  return (
    <div className="App">
      Active User ID: {activeUserId}
      <div>
        <UserList setActiveUserId={setActiveUserId} />
      </div>
      <div>
        <UserDetail activeUserId={activeUserId}/>
      </div>
    </div>
  );
}

export default App;
