import { useState } from "react";
import Displaycolor from "./Displaycolor";

const Formulario = () => {

    const [colores, setColores] = useState([]);

    const handlenewColor = (e) =>{
        e.preventDefault();
        setColores([...colores, e.target.color.value])
        e.target.color.value = ""
        console.log(e.target.color.value);

    }

    return ( 
        <>
        <form onSubmit={ handlenewColor}>
            
            <label>Color</label>
            <input htmlFor="color" name="color"/>
            <button type="submit">Add</button>
            
            
        </form>
        <div className="colores">
                {
                    colores.map((color, idx) => <Displaycolor key={`${color}${idx}`} colores={color} />)
                }
            </div>

        </>
     );
}
 
export default Formulario;
