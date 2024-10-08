const ListComponent = ({data})=>{
    return(<ul>
        {data.map((item)=>{
            return <li key={item.id}>{item.name}</li>
        })}
    </ul>)
}

export default ListComponent;