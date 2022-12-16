import Items from "./Items"
import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import Loading from "./Loading"
let counter = 0;
const Home = () => {
    

    const [loading,setLoading] = useState(false);
    const [data,setData]= useState(null);

    const getData = ()=> {
        fetch('http://localhost:8000/data')
        .then(data=>{return data.json()})
        .then((data)=>{setData(data); setLoading(false)})
        .catch((error)=>{console.log(error)})
    }

    useEffect(()=>{
        setLoading(true);
        getData()
    },[])



    // const data = [
    //     {title: "Learn React", priority: "High",id: 1},
    //     {title: "Learn C++", priority: "High",id: 2},
    //     {title: "Play video games", priority: "Medium",id: 3},
    //     {title: "Do the homework", priority: "Medium",id: 4},
    //     {title: "Study Electronics", priority: "Low",id: 5},
    // ]
    // const [item,setItem] = useState(data);
    const [name, setName] = useState('')
    const [priority, setPriority] = useState('High')








const deleteData = (id)=>{
    fetch(`http://localhost:8000/data/${id}`,
    {method:'DELETE'})
    .then(res => res.json)
    .then((res)=>console.log(res));
    getData()
};

    // const handleSubmit = async (e) => {
    //     const newData = {title: name, priority: priority}
    //     fetch(`http://localhost:8000/data`,
    //     {method:'POST',
    //     headers : {'Content-Type' : 'application/json'},
    //     body: JSON.stringify(newData)},
    //     )
    //     .then(res => res.json)
    //     .then((res)=>console.log(res));
    //     getData()
        // setItem([...item, newData])
    
    // const handleDelete = (id)=>{
    //     const newData = item.filter((element)=>{
    //         return element.id !== id
    //     }
    //     )
    //     setItem(newData)
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { title: name, priority: priority}
        fetch('http://localhost:8000/data', {
        method: 'POST',
        body: JSON.stringify(newData),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        }).then((data)=>{return data.json()})
        .then((data)=> console.log(data))
        .catch((error)=> console.log(error));
        getData()
};







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
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <input className="textInput" placeholder="Write your Task" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
                    <label id="prioTitle">Priority :</label>
                    <select name="priority" id="priority" value={priority} onChange={(e)=>{setPriority(e.target.value)}}>
                        <option className="option" value="High">High</option>
                        <option className="option" value="Medium">Medium</option>
                        <option className="option" value="Low">Low</option>
                    </select>
                    <button className="add">Add</button>
                </form>
            </div>
            <div className="tasks">
                {loading && <Loading />}
                {/* { data && <ToDoList data={data} handleDelete={handleDelete} /> }  */}
                {data && <Items  item={data} deleteData={deleteData} />}
            </div> 
            {/* <footer>
                footer
            </footer> */}
        </div>

    );
}

export default Home;