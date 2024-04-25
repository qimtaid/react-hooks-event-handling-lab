// Code EyesOnMe Component Here
import React, {useState, useRef} from 'react';



function EyesOnMe() {
    const [focus, SetFocus] = useState(false);
    const buttonRef = useRef();

    const handleFocus = ()=> {
        console.log('Good!');
        SetFocus(true);
    };

    const handleBlur = () => {
        console.log('Hey! Eyes on me!');
        SetFocus(false);
    }
  return (
    <button ref={buttonRef} onFocus={handleFocus} onBlur={handleBlur}>Eyes On Me</button>
  )
}

export default EyesOnMe

