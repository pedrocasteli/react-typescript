import React from "react";
import Todos from "./Components/Todos";

function App() {
    return (
        <div>
            <Todos items={["Learn React", "Learn TypeScript"]} />
        </div>
    );
}

export default App;
