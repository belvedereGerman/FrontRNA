import axios from "axios";
import React from "react";
import Resultado from "./Resultado";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resultado: {} };
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

    return axios
      .post("http://127.0.0.1:8000/detectar-objeto", bodyFormData)
      .then((result) => {
        this.guardarData(result);
      })
      .catch((error) => {
        console.log("la cagamos");
      });
  };

  guardarData(result) {
    this.setState({ resultado: result }, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <body>
        <h2>Detectar Objeto</h2>

        <form
          onSubmit={this.submitImg}
          encType="multipart/form-data"
          onChange={(e) => this.changeHandler(e)}
        >
          <input type="file" name="img1" />
          <button type="submit">Submit</button>
        </form>
      </body>
    );
  }
}
export default Home;
