
import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [maledata , setMaledata] = useState(false);
  const [femaledata , setFemaledata] = useState(false);
 const handleClick = ()=>{
      setMaledata(true);
      setFemaledata(false);
}
const handleTick = ()=>{
      setMaledata(false);
      setFemaledata(true);
}

  return (
    <div>
        {/* Do not remove the main div */}
<h1>Select your gender:</h1>
<form>
        <input type="radio" value="Male" checked={maledata} onClick={handleClick} />
        <label>Male</label>
        
        <input type="radio" value="Female" checked={femaledata} onClick={handleTick} />
        <label>Female</label>
        </form>
      {maledata ? (
          <div>
             <h1>Select your shirt size</h1>
              <select>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
          </div>

      ):(
        <div>
           <h1>Select your dress size</h1>
           <select>
             <option default>select size</option>
             <option>2</option>
             <option>4</option>
             <option>6</option>
           </select>
        </div>
      )}

       


  
  <hr />
    </div>
  )
}

export default App
