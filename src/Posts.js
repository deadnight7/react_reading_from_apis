import React from 'react'
const post = (props) => {
    return <div>
        <div className="col-sm-4 card">
            <h3>
                {props.title}
            </h3>
            <p>
                {props.body}
            </p>
            <p className="delete" onClick={() => props.delete(props.index)} >Delete</p>
        </div>
    </div>
}
export default post;