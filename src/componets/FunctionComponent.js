import React from 'react'



export const FunctionComponent = () => {
    function sum(e) {
        e.preventDefault()
        var num1 = document.getElementById('num1').value
        var num2 = document.getElementById('num2').value
        if (num1 === '' || num1 === null) {
            alert("Enter Number For Addition...")
        }
        else if(num2 === '' || num2 === null){
            alert("Enter Number For Addition...")
        }
        else {
            var result = (parseInt(num1) + parseInt(num2))
            console.log(result);
            document.getElementById('result').innerHTML = `<h2>Result is ${result}</h2>`
        }
    }

    return (
        <div>
            <div className="text-center">
                <h1 className="text-center my-4">Addition Using Function Component</h1>
            </div>
            <form className="container-sm my-4">
                <div className="mb-3">
                    <label htmlFor="num1" className="form-label">Number 1</label>
                    <input type="number" className="form-control" id="num1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="num2" className="form-label">Number 2</label>
                    <input type="number" className="form-control" id="num2" aria-describedby="emailHelp" />
                </div>
                <button type="submit" onClick={e => sum(e)} className="btn btn-success w-100 my-4">Addition</button>
            </form>
            <div className="result text-center" id="result">
            </div>
        </div>
    )
}

