const Profile = ({info})=>{
 return(
    <div>
        <b>USER DETAILS:</b>
       <p>
        {info?info.name.title + "."+info.name.first + " " +info.name.last:null}
       </p>
    </div>
 );
}

export default Profile;