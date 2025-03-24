import React from 'react' ;
import {Routes,Route} from 'react-router-dom' ;
import Data from './Data.jsx' ;

function Path(props)
{
    
   return(
    <Routes>
       {
       props.value.map((el,index)=>{
        return( <Route key={index} path={"/student"+index} element={<Data value={el} />} /> )
       })
     }
    </Routes>
   )
}

export default Path;