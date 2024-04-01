import React, { useState } from 'react';
import './App.css';



function App() {
  const [ma, setMa] = useState<{ id: number; taskk: string; }[]>([]);
  var [mi, setMi] = useState(0);
  const [mu, setMu] = useState("");
  const [me, setMe] = useState(true);
  const [mo, setMo] = useState("");
  

  //crio a task como um objeto, adicionando id e o valor inserido
  const criar = () => {
    const task = {
      id: mi,
      taskk:mu,
    };

    setMi(mi+1);
    setMa([...ma, task]);
  }

  //exclui a task de acordo com o id
  const remove = (namee: any) => {
    setMa(ma.filter((name) => name.id !== namee))

  };

  //recebo os valores digitados no input de forma constante
  const handle = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setMu(event.target.value)
  }

  //verifico se o botão clicado foi enter, se sim crio task
  const clicarComEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    {event.key==='Enter'&&criarTask()}
  }

  //crio a task e verifico se é vazio ou contém apenas espaços
  const criarTask = () =>{ 
    {mu.trim()!=="" && criar(); setMu("")}
    
  }

  //Crio um modal
  const handlepopup = (name : any) =>{
    setMe(!me)
    setMo(name.taskk)
  }

  return (
    <div className="App">
      
      <header>
      <input onKeyDown={clicarComEnter} value={mu} onChange={handle}></input>
      <button onClick={criarTask}>criar</button>
      <h1>{"Tasklist"}</h1>
      
      </header>
      {me ? <div></div>:<div className='Oii' onClick={() => setMe(!me)}><h1 className='textinside2'>{mo}</h1></div>}
        <div className='pai'>{  
          
          ma.map((name,key) => {
            return <div className='card'>
              
              <div className='excluir' onClick={()=>remove(name.id)}></div>
              <div className='Oi' onClick={() => handlepopup(name)} ><h1 className='textinside'>{name.taskk}</h1></div> 
            </div>
          })
          }
        </div>
    </div>
  );
}

export default App;
