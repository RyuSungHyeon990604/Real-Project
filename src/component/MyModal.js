import ReactModal from "react-modal";
import React from "react";
const MyModal = ({isOpen, setOpen}) =>{
    
    
    return(
       
        <div style={{width:"600px",height:"600px",position:"absolute",background:"white"}}>
            <div>{isOpen ? "true" : "false"}</div>
            
            <div>
                <button onClick={()=>setOpen(!isOpen)}>확인</button>
                <button onClick={()=>setOpen(!isOpen)}>취소</button>
            </div>
        </div>

      
    );
};

export default MyModal;