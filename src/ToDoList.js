const ToDoList = (props) => {
    const myData = props.data
    const boxes = myData.map((dat,index) =>{
                return  <div className="box">
                    <h3 className="title">{(myData[index].priority === 'medium' || myData[index].priority  === 'high' ) && myData[index].title}</h3>
                    <h4 className="priority">{(myData[index].priority === 'medium' || myData[index].priority  === 'high' ) && myData[index].priority}</h4>
                </div> 
                
            })
    return ( 
        <>
        {boxes}
        </>
    );
}
 
export default ToDoList;