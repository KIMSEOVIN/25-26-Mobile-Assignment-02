import { View, StyleSheet, Text, useWindowDimensions, StatusBar } from "react-native";
import Button, { ButtonTypes } from "./components/Button"; //
import { useState } from "react";

const App = () => {
  const windowWidth = useWindowDimensions().width;
  const width = windowWidth / 4 - 1;


  const [result, setResult] = useState('0');
  const [formula, setFormula] = useState([]);

  //숫자버튼 클릭시
  const onPressNumber = (num) => {

    const newResult = result === '0' ? num.toString() : result + num.toString();
    setResult(newResult);
  };

  //연산자 버튼 클릭 시
  const onPressOperator = (op) => {
    switch (op) {
      case 'C':
        setResult('0');
        setFormula([]);
        break;

      case '+':
      case '-':

        setFormula([...formula, result, op]);
        setResult('0');
        break;


      case '=':
        calculate(); // calculate 함수
        break;


      default:
        break;
    }
  };

  // 실제 계산기 수행 함수
  const calculate = () => {
    const lastFormula = [...formula, result];

    let calculatedResult = 0;
    let currentOperator = '+';

    lastFormula.forEach((item) => {
      if (item === '+') {
        currentOperator = '+';
      } else if (item === '-') {
        currentOperator = '-';
      } else {

        const num = parseFloat(item);
        if (currentOperator === '+') {
          calculatedResult += num;
        } else if (currentOperator === '-') {
          calculatedResult -= num;
        }
      }
    });

    setResult(calculatedResult.toString());
    setFormula([]);
  };


  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.resultContainer}>

          <Text style={styles.result}>{result}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.left}>
            <View style={styles.numberContainer}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, key) => (
                  <Button
                      key={key}
                      title={num}
                      onPress={() => onPressNumber(num)}
                      buttonStyle={{ width, height: width, marginBottom: 1 }}
                      buttonType={ButtonTypes.NUMBER}
                  />
              ))}
            </View>
            <View style={[styles.bottomContainer, { height: width }]}>
              <Button
                  title={0}
                  onPress={() => onPressNumber(0)}
                  buttonStyle={{ width: width * 2, height: width, marginTop: 1 }}
                  buttonType={ButtonTypes.NUMBER}
              /> //
              <Button
                  title={"="}
                  onPress={() => onPressOperator("=")}
                  buttonStyle={{ width, height: width, marginTop: 1 }}
                  buttonType={ButtonTypes.OPERATOR}
              />
            </View>
          </View>
          <View style={[styles.opContainer, {width}]}>
            <Button
                title={"C"}
                onPress={() => onPressOperator("C")}
                buttonStyle={{ width, height: width, marginTop: 1 }}
                buttonType={ButtonTypes.OPERATOR}
            />
            <Button
                title={"-"}
                onPress={() => onPressOperator("-")}
                buttonStyle={{ width, height: width, marginTop: 1 }}
                buttonType={ButtonTypes.OPERATOR}
            />
            <Button
                title={"+"}
                onPress={() => onPressOperator("+")}
                buttonStyle={{ width, height: width * 2, marginTop: 1 }}
                buttonType={ButtonTypes.OPERATOR}
            />
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  resultContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  result: {
    padding: 20,
    fontSize: 50,
    color: 'white',
    textAlign: 'right',
  },
  buttonContainer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  left: {
    width: '75%',
  },
  numberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-evenly',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  opContainer: {
    justifyContent: 'flex-start',
  },
});

export default App;