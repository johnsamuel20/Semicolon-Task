const Items = (props) => {
    let items = props.item;
    return (
        <div className="tasks">
                {items.map((item,index)=>{
                    return <div className="box">
                        <h3 key={item.id} className="title">{item.title}</h3>
                        <h4 key={item.id} className="priority">{item.priority}</h4>
                    </div>
                })}
            </div> 
    );
}
 
export default Items;