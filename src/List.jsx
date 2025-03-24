import React from 'react' ;
import {Link} from 'react-router-dom' ;

function List(props)
{
    function select()
    {
        let data = document.querySelector("#Data_main")
       data.style.display = "grid";
    }
    let temp = props.value
   return (
    <>
        {
             temp.map((el,index)=>{
                 return(
                      <Link key={index} to={"/student"+index}   onClick={select} > {el.name}</Link>
                 )
             })
        }
    </>
   )
}

export default List;