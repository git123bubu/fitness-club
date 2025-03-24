import './data.css'
function Data(props)
{
    // console.log("data")
    return <div id="Data_main">
         <h1>NAME :- {props.value.name}</h1>
         <h1>ID :- {props.value.id}</h1>
         <h1>ADDRESS :- {props.value.add}</h1>
         <h1>JOIN DATE :- {props.value.join}</h1>
    </div>
}

export default Data;