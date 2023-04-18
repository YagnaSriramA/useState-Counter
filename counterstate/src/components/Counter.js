import React, {useState} from "react"
import '../style.css'

function Counter()
{


    const [count,setCount] = useState(0)
    

    function onplus()
    {
        setCount(prevCount => prevCount + 1)
    }

    function onminus()
    {
        setCount(prevCount => prevCount - 1)
    }



    return(
            <div className="set">
                

                <div className="set-two">
                    
                    <div className="ball-two">
                        <button>{count}</button>
                    </div>

                </div>

                <div className="set-one">
                    
                    <div className="ball-one">
                        <button onClick={onminus}>-</button>
                    </div>
                    
                    <div className="ball-three">
                        <button onClick={onplus}>+</button>
                    </div>

                </div>
            </div>
    )
}

export default Counter