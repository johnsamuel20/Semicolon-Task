const Home = () => {
    const data = [
        {title: "Learn React", priority: "high"},
        {title: "Learn C++", priority: "high"},
        {title: "Play video games", priority: "medium"},
        {title: "Do the homework", priority: "medium"},
        {title: "Study Electronics", priority: "low"},
    ]
    const boxes = data.map((dat,index) =>{
                return  <div className="box">
                    <h3 className="title">{(data[index].priority === 'medium' || data[index].priority  === 'high' ) && data[index].title}</h3>
                    <h4 className="priority">{(data[index].priority === 'medium' || data[index].priority  === 'high' ) && data[index].priority}</h4>
                </div> 
                
            })

    return( 
        <div>
            <nav>
                <label className="header" >
                    My TO LIST
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
                    <button className="highP">Priority: HIGH</button>
                    <button className="add">Add</button>
                </form>
            </div>
            <div className="tasks">
                {boxes}
            </div>
            <footer>
                footer
            </footer>
        </div>

    );
}

export default Home;