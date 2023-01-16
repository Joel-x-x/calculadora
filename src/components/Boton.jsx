import '../styles/boton.css';

const Boton = ({ children, clic }) => {

  const esOperador = valor => {
    return isNaN(valor);   
  }

  let clase = "";
  // Estas clases serviran para poder posicionar estos elementos con grid
  switch (children) {
    case "+":
      clase = "suma"
      break;
    case "=":
      clase = "igual"
      break;
    case "0":
      clase = "cero"
      break;
    default: 
      clase = ""
      break;
  }

  return (
    // Clases en base a si es C si es operador y agrega una clase dependiendo del caracter + = 0 
    <div className={ `boton ${children === "C" ? "borrar" : esOperador(children)? "operador": "numero"} ${clase}` } onClick={ () => clic(children) }>
      { children }
    </div>
  );
}

export default Boton;