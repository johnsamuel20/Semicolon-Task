const ToDoList = (props) => {
    const myData = props.data
    const boxes = myData.map((dat,index) =>{
                return  <div className="box" key={dat.id}>
                    <h3 className="title">{dat.title}</h3>
                    <h4 className="priority">{dat.priority}</h4>
                </div> 
                
            })
    return ( 
        <>
        {boxes}
        </>
    );
}
 
export default ToDoList;