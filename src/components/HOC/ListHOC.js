const ListHOC =(Component)=>{



    
    return function withListLoading({isLoading, ...props}){
        if(!isLoading) return <Component {...props}/>
        return <p>Loading...</p>
    }
}

export default ListHOC;