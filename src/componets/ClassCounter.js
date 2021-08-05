import React, { Component } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

export default class ClassCounter extends Component {
    render() {
        return (
            <>
            <div className="text-center my-4">
            <h1>Counter Using Class Component</h1>
        </div>
            <Container className="text-center" style={{marginTop:200}}>
                <ButtonGroup aria-label="Basic example">
                    <Button className="mx-4 p-4" onClick={e => del(e,document.getElementById('num').innerHTML)} style={{fontSize:25}}>-</Button>
                    <h1 className="data my-3" id="num">0</h1>
                    <Button className="mx-4 p-4"  onClick={e => add(e,document.getElementById('num').innerHTML)} style={{fontSize:25}}>+</Button>
                </ButtonGroup>
            </Container>
            </>
        )
    }
}
var update = (num) => {
    document.getElementById('num').innerHTML = num
}
var add = (e,num) => {
    e.preventDefault();
    var newNum = parseInt(num) + 1
    update(newNum)
}
var del = (e,num) => {
    if(num <= "0"){
        alert("Vlaue Can't be Less then 0")
    }
    else{
    e.preventDefault();
    var newNum = parseInt(num) - 1
    update(newNum)
}
}
