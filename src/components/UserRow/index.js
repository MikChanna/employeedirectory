import React from "react";

function Userrow(props) {

return <div className= "row">
    <div className = "col">
        <img alt = {props.firstName + props.lastName} src = {props.picture} />
    </div>
    <div className = "col">
        <p>{props.firstName } </p>
    </div>

    <div className = "col">
        <p>{props.lastName}</p>
    </div>

    <div className = "col">
        <p>{props.email}</p>
    </div>

    <div className = "col">
        <p>{props.birthday}</p>
    </div>

    <div className = "col">
        <p>{props.country}</p>
    </div>
</div>

}

export default Userrow;