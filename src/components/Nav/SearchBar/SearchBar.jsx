import style from './searchBar.module.css';
import {useState} from "react";

export default function SearchBar(props) {
   const {onSearch} = props;

   const [id, setId] = useState("");

   const handleChange = (event) => {

      event.preventDefault();

      let input = event.target.value;

      setId(input);

   }

   return (
      <div className={style.container}>

        <input className={style.input} 
         type='search' value={id} 
         onChange={handleChange}/>

         <button onClick={() => onSearch(id)}>Agregar</button> 
      </div>
   );
}
