const Items = (props) => {
    let items = props.item;
    let deleteFunction = props.deleteData;
    return (
        <div className="tasks">
                {items.map((item,index)=>{
                    return (
                    <div className="box" key={item.id}>
                        <h3 className="title">{item.title}</h3>
                        <h4 className="priority">{item.priority}</h4>
                        <button className="delete" onClick={()=>{deleteFunction(item.id)}}>Delete</button>
                    </div>
                    )
                })}
            </div> 
    );
}
 
export default Items;