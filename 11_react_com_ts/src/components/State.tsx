import React, {useState, ChangeEvent} from 'react'


const State = () => {
  
const [text, setText] = useState<String | null>("Testando o hook");

const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
}
  

    return (
    <div>
       <p>O texto é:{text}</p>
       <input type= "Text" onChange={handleChange}/>
    </div>
  )
}

export default State