import { useState } from "react";
import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#3a414262", 
  },
  title: {
    fontSize: 26,
    color: "#4f4b57ff", 
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "#0a59ceff",
  },
  input: {
    width: "80%",
    borderColor: "#89b9b4ff", 
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff", 
  },
  button: {
    marginVertical: 10,
    backgroundColor: "#50b7c0c5", 
  },
  imcResult: {
    fontSize: 18,
    color: "#628f97ff", 
    marginTop: 10,
    fontWeight: "bold",
  }
});

export default function Index() {
 
  const [mensal, setMensal] = useState("");
  const [taxa, setTaxa] = useState("");
  const [tempo, setTempo] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularMontante = () => {
    const mensalValue = parseFloat(mensal.replace(",", "."));
    const i = parseFloat(taxa.replace(",", "."));
    const t = parseInt(tempo);
    if (!mensalValue || !i || !t) {
      setResultado("Preencha todos os campos corretamente.");
      return;
    }
    let montanteR = 0;
    let montanteS = mensalValue * t;
    for (let j = 1; j <= t; j++) {
      montanteR = montanteR + montanteR * i + mensalValue;
    }
    setResultado(`Montante investido: R$ ${montanteS.toFixed(2)} | Montante final: R$ ${montanteR.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Financiamentos</Text>
      <TextInput
        placeholder="Valor mensal investido"
        style={styles.input}
        value={mensal}
        onChangeText={setMensal}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Taxa (i) - Ex: 0.05 para 5%"
        style={styles.input}
        value={taxa}
        onChangeText={setTaxa}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Tempo (t) em períodos"
        style={styles.input}
        value={tempo}
        onChangeText={setTempo}
        keyboardType="numeric"
      />
      <Button
        title="Calcular Montante Recorrente"
        color="#0f24e6ff"
        onPress={calcularMontante}
      />
      {resultado !== "" && (
        <Text style={styles.imcResult}>{resultado}</Text>
      )}
    </View>
  );
}