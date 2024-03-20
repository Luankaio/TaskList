import React, { useState } from 'react';
import './App.css';



function App() {
  const [ma, setMa] = useState<{ id: number; taskk: string; }[]>([]);
  var [mi, setMi] = useState(0);
  const [mu, setMu] = useState("");
  

  const criar = () => {
    const task = {
      id: mi,
      taskk:mu,
    };

    setMi(mi+1);
    setMa([...ma, task]);
  }

  const remove = (namee: any) => {
    setMa(ma.filter((name) => name.id !== namee))

  };

  const handle = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setMu(event.target.value)
  }


  return (
    <div className="App">
      <input onChange={handle}></input>
      <button onClick={criar}>criar</button>
      <h1>{"Checklist"}</h1>
        <div className='pai'>{  
          ma.map((name,key) => {
            return <div className='Oi' onClick={()=>remove(name.id)}>{name.taskk}{name.id}</div>
          })}
        </div>
    </div>
  );
}

export default App;
