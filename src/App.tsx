import React, { useState } from 'react';
import './App.css';



function App() {
  const [ma, setMa] = useState<{ id: number; taskk: string; }[]>([]);
  var [mi, setMi] = useState(0);
  const [mu, setMu] = useState("");
  const [me, setMe] = useState(true);
  const [mo, setMo] = useState("");

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

  const handleclickbutton = () =>{
    setMu("")
    criar()
  }

  const handlepoppup = (name : any) =>{
    setMe(!me)
    setMo(name.taskk)
  }
  const aaa = () =>{

  }
  return (
    <div className="App">
      <header>
      <input value={mu} onChange={handle}></input>
      <button onClick={handleclickbutton}>criar</button>
      <h1>{"Tasklist"}</h1>
      {me ? <div></div>:<div className='Oii' onClick={() => setMe(!me)}><h1 className='textinside2'>{mo}</h1></div>}
      </header>
      
        <div className='pai'>{  
          
          ma.map((name,key) => {
            return <div className='card'>
              
              <div className='excluir' onClick={()=>remove(name.id)}></div>
              <div className='Oi' onClick={() => handlepoppup(name)} ><h1 className='textinside'>{name.taskk}</h1></div> 
            </div>
          })}
        </div>
    </div>
  );
}

export default App;
