import { StatusBar } from 'expo-status-bar';

import { Alert, StyleSheet, Text, View } from 'react-native';

import { Container, Titulo, Texto, SimpleView, ButtonCustom } from './styled';

export default function App() {

  { /*
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
</View> */ }

  return (
 
   <Container backgroundColor="green">
     <SimpleView>
     <Titulo>Bem-vindo</Titulo>
     <Texto cor="white" font="18">Pessoa Desenvolvedora</Texto>
     </SimpleView>

     <SimpleView>
      <ButtonCustom onPress={() => alert("Logar Sistema")}>
        <Texto cor="black" font="16">Acessar</Texto>
      </ButtonCustom>
     </SimpleView>
   </Container>
  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
