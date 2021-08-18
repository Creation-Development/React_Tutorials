import React from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

const Name = (props) => {
    return (
        <>
            <h1 className="text-center">My Name is {props.name}</h1>
        </>
    )
}

export default withRouter(Name)
