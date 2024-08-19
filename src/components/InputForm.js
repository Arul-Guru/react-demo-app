const InputForm = ({value, setValue})=>{
    return(
    <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}>
    </input>)
}

export default InputForm;