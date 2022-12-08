import Items from "./Items"
import React, { useState } from "react";
import ToDoList from "./ToDoList";
const Home = () => {
    const data = [
        {title: "Learn React", priority: "high"},
        {title: "Learn C++", priority: "high"},
        {title: "Play video games", priority: "medium"},
        {title: "Do the homework", priority: "medium"},
        {title: "Study Electronics", priority: "low"},
    ]
    const [item,setItem] = useState([]);
    
    return( 
        <div>
            <nav>
                <label className="header" >
                    My TODO LIST
                </label>
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Button</a></li>
                </ul>
            </nav>
            <div>
                <form>
                    <input className="textInput" placeholder="Write your Task" type="text" />
                    <label id="prioTitle">Priority :</label>
                    <select name="priority" id="priority">
                        <option className="option" value="High">High</option>
                        <option className="option" value="Medium">Medium</option>
                        <option className="option" value="Low">Low</option>
                    </select>
                    <button onClick={(e)=> {
                        e.preventDefault();
                        setItem([...item,{title:document.querySelector(".textInput").value,priority:document.querySelector("#priority").value}]);
                        console.log(item)
                    }}  className="add">Add</button>
                </form>
            </div>
            <div className="tasks">
                {/* <ToDoList data={data} />  */}
                <Items  item={item} />
            </div> 
            <footer>
                footer
            </footer>
        </div>

    );
}

export default Home;