import React from 'react'
import './App.css' ;
import {BrowserRouter} from 'react-router-dom' ;
import Data from './Data.jsx' ;
import List from './List.jsx'  ;
import Path from './Path.jsx' ;
function App()
{
  let [arr,setarr] = React.useState([{name:"T.Ashutosh sahoo",id:"trainer21",add:"cuttack , athagarh",join:"8,2,2021"},
                                     {name:"T.Rakesh sahoo",id:"trainer22",add:"bbsr , puricanal road",join:"10,2,2023"},
                                     {name:"T.sushmita das",id:"trainer23",add:"bbsr , puricanal road",join:"10,2,2023"},
                                     {name:"T.dilip swain",id:"trainer24",add:"bhadrak",join:"10,2,2023"}
                                     ])

function ad()
{
  let name = prompt("ENTER NAME :-")
  let id = prompt("ENTER ID :-")
  let add = prompt("ENTER ADDRESS :-")
  let join = prompt("JOIN DATAE :- DT,MONTH,YEAR")
   if(name.length > 0 && id.length > 0 && add.length > 0 && join.length > 0)
              {
                   let ob = {}
                   ob.name = name
                   ob.id = id;
                   ob.add = add;
                   ob.join = join;
                   setarr([...arr,ob])
              }
}
function remove()
{
  let id = prompt('enter id for remove ')
  if(id == "trainer21" || id == "trainer22" || id == "trainer23" || id == "trainer24")
      {
          return ;
      }
  let arr2 = arr.filter((el)=> el.id != id)
//  let arr2 = []
//  for(let i=0; i<arr.length; i++)
//  {
//     if(arr[i].roll != roll)
//     {
//         arr2.push(arr[i])
//     }
//  }
  
  setarr([...arr2])
}

   function del()
   {
       let data = document.querySelector("#Data_main")
       data.style.display = "none";
   }

  return(
  <main>
     <BrowserRouter>
          <div id="main">
          <h1>...FITNESS...CLUB...</h1>
          <div id="main_2ndchild">

              <div id="first_div">
                     <div id="first_child">
                        <button onClick={ad}>Add</button>
                        <button onClick={remove}>Remove</button>
                     </div>
                     <div id="fist_2ndchild">
                           
                             <List value={arr} />

                     </div>
              </div>

              <div id="sec_div">
                   <div id="sec_div_1stchild">INFORMATION</div>
                   <div id="sec_div_2ndchild">
                    
                         <Path value={arr} />
                    
                   </div>
              </div>
          </div>
    </div>
    <div id="cancel" onClick={del}> X </div>
   </BrowserRouter>
  </main>
  )
}

export default App;

