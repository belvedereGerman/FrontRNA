import axios from "axios";
import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../componentes/Header";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { evento: {}, ready: false };
  }

  changeHandler = (e) => {
    const el = e.target;
    this.setState({
      [el.name]: el.type === "file" ? el.files[0] : el.value,
    });
  };

  submitImg = (e) => {
    e.preventDefault();

    const bodyFormData = new FormData(e.target);
    this.setState({ evento: bodyFormData });
    //
    return axios
      .post("http://127.0.0.1:8000/detectar-objeto", bodyFormData)
      .then((result) => {
        this.guardarData(result);
      })
      .catch((error) => {
        console.log("la cagamos");
      });
  };

  /*async mandaleAxios(lacosa) {
    await axios
      .post("http://127.0.0.1:8000/detectar-objeto", lacosa)
      .then((result) => {
        this.guardarData(result);
      })
      .catch((error) => {
        console.log("la cagamos");
      });
  }*/

  guardarData(result) {
    this.setState(
      {
        detectado: result.data.detectado,
        porcentaje: result.data.porcentaje,
      },
      () => {
        console.log(this.state);
      }
    );
    this.setState({ ready: true });
  }

  render() {
    return (
      <React.Fragment>
        <Header></Header>

        <main className="margentop30">
          <h2 className="centrar colortxt">Detectar Objeto</h2>
          <div className="centrar">
            <form
              className="margentop30"
              onSubmit={this.submitImg}
              encType="multipart/form-data"
              onChange={(e) => this.changeHandler(e)}
            >
              <input className="form-control" type="file" name="img1" />
              <button type="submit" className="btn btn-secondary  margen30">
                Detectar
              </button>
            </form>
          </div>
          {this.state.ready === true &&
            (this.state.porcentaje > 0.9 ? (
              <React.Fragment>
                <h2 className=" centrar colortxt margentop30"> resultado: </h2>
                <div className="container">
                  <p> Elemento detectado: {this.state.detectado}</p>
                  <p>
                    Porcentaje de eficiencia:
                    {parseFloat(this.state.porcentaje).toFixed(2)}
                  </p>
                </div>
              </React.Fragment>
            ) : (
              <div className="container">
                <p className="error centrar margentop30">
                  La imagen no corresponde a un auto , moto o persona{" "}
                </p>
              </div>
            ))}
        </main>
      </React.Fragment>
    );
  }
}
export default Home;
