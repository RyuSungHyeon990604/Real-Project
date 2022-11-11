import React from "react";


const User=({userID})=>{
    
    return(
        <div style={{textAlign :"right", border : "1px solid",width : "30%",float : "left",marginTop:"17%"}}>
            {userID}
        </div>
    );
}
export default User;