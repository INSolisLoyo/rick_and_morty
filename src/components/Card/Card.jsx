import style from './card.module.css';

export default function Card(props) {

   const {characters, onClose} = props;

   return (
      <div className={style.container}>

         <div className={style.imageContainer}>
            <img className={style.characterImage}
            src={characters.image} alt='' /> 
            <h2>{characters.name}</h2>
            <button className={style.closeButton} onClick={() => onClose(characters.id)}>X</button>
         </div>   
            <h2>{characters.status}</h2>
            <h2>{characters.species}</h2>
            <h2>{characters.gender}</h2>
            <h2>{characters.origin.name}</h2>
      </div>
   );
}
