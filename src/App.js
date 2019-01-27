import React from "react";
import { Elements } from "./Elements.js";
import "./styles.css";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                  {Elements.elements.map(element => {
                      return (
                        <tr className="element">
                          <td>{element.name}</td>
                          <td>{element.number}</td>
                          <td>{element.category}</td>
                        </tr>
                      );
                  })}
            </div>
        );
    }
}

export default App;