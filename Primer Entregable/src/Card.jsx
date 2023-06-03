import styles from './Card.module.css'

function Card(props) {

  return (
    <div className={styles.card}>
      <h2>{props.animal.nombre}</h2>
      <h2>{props.animal.clase}</h2>
    </div>
  );
}

export default Card;
