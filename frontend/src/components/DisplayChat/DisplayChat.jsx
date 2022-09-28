import React, { useState } from 'react';
    
const DisplayMessage = (props) => {
    const [currentMsg, setCurrentMsg] = useState("There is no message")
    return (
        <>
            <pre>{ props.message }</pre>
        </>
    );
};
    
export default DisplayMessage;