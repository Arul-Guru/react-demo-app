const ListComponent = ({items, clickHandler})=>{
    console.log(items);
    return(<div>
        <ul>
            {items.map((item, index)=>{
                return <li key={index} onClick={()=>clickHandler(item)}>{item}</li>
            })}
        </ul>
    </div>)
}

export default ListComponent;

