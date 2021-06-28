import {React,useState} from 'react'

import "bootstrap/dist/css/bootstrap.css";


function Increment(props) {
    const [count, setCount] = useState(props.startingCount);
  

    const subtractCount = () => {
      setCount(count => count - 1);
       
    }
    const addCount = () => {
      setCount(count => count + 1);
    }
    
    return (
        <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12">
          <h1>
            <button className="btn btn-primary" onClick={subtractCount}>-</button>
            {count}
            
            <button className="btn btn-primary" onClick={addCount}>+</button>
            
            </h1>
          </div>
        </div>
      </div>
    )
}

export default Increment
