import React, { createContext } from 'react';

// 4- importação de componentes
import FirstComponent from './components/FirstComponents'

// 5- destruturando props
import SecondComponent from './components/SecondComponent';
import Destruturing, {Category} from './components/Destruturing';

// 6- useState
import State from './components/state';

// 10 - utilizando contexto
import Context from './components/Context';

 // 7 - type 
 type textOrNull = string | null;

 type fixed = "Isso" | "Ou" | "Aquilo"

 // 9 - Context
 interface IAppContext {
  language: string,
  framework: string,
  projects: number,
 }

 export const AppContext = createContext<IAppContext | null>(null)


function App() {


  //1 variaveis 

 const name: string = "Hanna";
 const age: number = 22;
 const isWorking: boolean = true;

 // 2-funçoes
 const userGreeting =(name:string): string =>{
 return `Olá, ${name}!`
 }

  // 7 - type 
 const myText:textOrNull = "Tem algum texto aqui";
let mySecondText:textOrNull = null;

//mySecondText = "Opa";

const testeFixed: fixed = "Isso";

// 9 - Context
const contextValue: IAppContext = {
  language: "JavaScript",
  framework: "express",
  projects: 5,
};
 

 
 
 return (
  <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>Type Script com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
      <div>
        <p>Está trabalhando!</p>
      </div>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo"/>
      <Destruturing 
      title="Primeiro post" 
      content="Algum conteudo" 
      commentsQty={10}
      tags={["ts" , "js"]}
      category={Category.TS}
      />
      <Destruturing 
      title="Segundo post" 
      content="Mais outro conteudo" 
      commentsQty={5}
      tags={["Python"]}
      category={Category.P}
      />
      <State/>
      {myText &&<p>Tem texto na variavel</p>}
      {mySecondText && <p>Tem texto na variavel</p>}
      <Context/>
    </div>
    </AppContext.Provider>
     );
  }

  export default App;