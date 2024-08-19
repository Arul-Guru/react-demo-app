const SearchBox = ({search, setSearch})=>{

    const handleSubmit = (event)=>{
        event.preventDefault();
        setSearch(event.target.search.value)

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search"></input>
                <div>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    )
}

export default SearchBox;