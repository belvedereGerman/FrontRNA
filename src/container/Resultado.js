import React from "react";

class Resultado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      que: this.props.resultado.data.detectado,
      cuanto: this.props.resultado.data.porcentaje,
    };
  }
  render() {
    return (
      <body>
        <h1>Resultado</h1>
        <p>Identificación: {this.state.que}</p>
        <p> Porcentaje de coincidencia: {this.state.cuanto}</p>
      </body>
    );
  }
}
export default Resultado;
