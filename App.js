import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: "" ,
      img: require("./src/biscoitoFechado.png"),
    }

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.reiniciarBiscoito = this.reiniciarBiscoito.bind(this);

    this.frases = [
      "A vida trará coisas boas se tiver paciência.",
      "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
      "Não compense na ira o que lhe falta na razão.",
      "Defeitos e virtudes são apenas dois lados da mesma moeda.",
      "A maior de todas as torres começa no solo.",
      "Não há que ser forte. Há que ser flexível."
    ];
  }

  quebrarBiscoito(){
    let numberAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: ' "' + this.frases[numberAleatorio] + '"',
      img: require("./src/biscoitoAberto.png")
    });
  }

  reiniciarBiscoito(){
    this.setState({
      textoFrase: "",
      img: require("./src/biscoitoFechado.png")
    });
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.reiniciar} onPress={this.reiniciarBiscoito}>
          <Text style={styles.reiniciarTexto}>Reiniciar</Text>
        </TouchableOpacity>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
  textoFrase : {
    fontSize: 20,
    color: "#dd7b22",
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnArea : {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    color: "#dd7b22",
    fontSize: 18,
    fontWeight: "bold",
  },
  reiniciar : {
    width: 230,
    height: 50,
    backgroundColor: "#dd7b22",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  reiniciarTexto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  }
});

export default App;
