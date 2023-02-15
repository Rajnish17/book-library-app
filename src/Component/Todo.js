import React, { useState } from "react";
import "./todo.css"

const Todo = () => {
  const [input, setInput] = useState("");
  const [show, setShow] = useState([]);

  const handleclick = () => {
    if(input === ""){
     alert("please fill ")
    }else{
      setShow([...show, input]);
    }
    setInput("");
  };

  const handleDelete =(i)=> {
    let text = window.confirm("do you want to delete");
    if(text === true) {
    const removeItem = show.filter((e,id) => {
      return i !== id;
    });
    setShow(removeItem);
  }else {
    console.log(text)
  };
      
    };


  return (
    <div className="container">
      <div>
        <input className="input-text"
          type={"text"}
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button className="button" onClick={handleclick}>Add</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Todo Name</th>
            
            <th scope="col">Delete</th>
          </tr>
        </thead>

        {show.map((ele, i) => {
          return (
            <tbody key={i}>
              <tr>
                <th scope="row">{i}</th>
                <td>{ele}</td>
                <td><button className="button" onClick={()=>handleDelete(i)}>X</button></td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Todo;
