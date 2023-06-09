import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards(props) {

   const {characters, onClose} = props;

   return (
      <div className = {style.container}>
         {  
            characters.map((personaje) => {

               return (
                  <li>
                     <Card
                        key={personaje.id}

                        characters = {personaje}

                        onClose={props.onClose}
                     />
                  </li>
               )
            })
         
         }
      </div>
   )
}
