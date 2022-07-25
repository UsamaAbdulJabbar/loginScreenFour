/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';

const App = () => {
  const login = ()=>{
    Alert.alert("Confirmation", "Successfully login")
  }
  

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
      <View>
        <View>
          <View style={{marginTop:30,padding:10,justifyContent:"center",alignItems:"center"}}><Text style={{color:"#dd0ffc",fontSize:32,fontFamily:"system-ui",fontWeight:"bold", }}>LOGIN</Text></View>
          <View style={{marginTop:30,marginLeft:20,padding:10,justifyContent:"center"}}><Text style={{color:"grey",fontSize:16 }}>Login with one of the following account</Text></View>
          <View style={{marginTop:10,marginLeft:20,padding:10,justifyContent:"space-evenly",flexDirection:"row",alignItems:"center"}}>
            <View style={{backgroundColor:"#dd0ffc",borderRadius:20,width:150,height:60,justifyContent:"center",alignItems:"center",elevation:30}}>
              <Image  style={styles.googleLogo} source={{uri:"https://icon-library.com/images/google-g-icon/google-g-icon-9.jpg"}} />
              </View>
           <View  style={{backgroundColor:"#dd0ffc",borderRadius:20,width:150,justifyContent:"center",alignItems:"center",elevation:30}}>
             <Image style={styles.appleLogo} source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAAD8/vz////z9fO2uLYICAj3+fdLS0vm6OZ4eXjw8vDr7eujpaMpKimfoJ9rbGuMjYyrravf4d+wsbBDQ0OKi4rP0c/Z29m7vLs6OjrBw8FPUE+UlZTT1dNzdHMbGxtXWFcWFxZjZGOAgYB1dnVHSEclJSUxMjEvMC8ZGRnBCm4CAAAHTklEQVR4nO2d63ayTAyFIbylFK0WULCeq7Xtd/83+IG2th6YQbIxweXzq6s/ZmU7wxwyScZxtPL1/PwsbUNzvC7HKRG50nY0xPAp9gt5rutJm9II09lOnXubCgcjfy/vJhVO/8q7PYWD1DvUd2sKJ3Ss77YUfvmn+lzXlzYLR++sQMqk7YIRnNOXK5xKGwbiIzwv0KUXadMwrM9MMd8KpU3D0CvT51JH2jYISalAlxJp4xD8KxfoUl/aOgBTg0CXvqTN4/NkFBi+SdvH5s0k0KWxtH18OmaFS2n7uCxKdjL7QSptIJvyhXCncChtIJeNWaBLr9IWcvEtAlu/oRnaunAubSGTgU1g65eKsU3hk7SFTF5tAgNpC7mMLArdibSFTKxdOJK2kIvhULjFa/2pwrYWrqUN5PJi2a+l0gayMXch+QNpA7nMLV24lDaQjflQcQv+p9jou2j7ZsaxbUnbP8s4TmRyIN6CQNOOjWJp4yAYBEbStmEov6e4kcu0Mjc33cIsuqVbchvaab+H+5uzCulWRmjBOYWULaXNAnKqkOiftFFQjhQSuT1pk8AcKCSKb2IXc8BeIeVkK2lzGqBL34RR9CBtTCP0vE44epkupe24c4fHwx+kbdkzefyB6ZDfTMcZ/WE0nm6EnW/v8/4sC/7YFGdpf14n2ufhfR5vGzrcEhSrStKXOnmsEm8n69gm8i49zg5T/1jdQZP++Pqu8EmSlZm0NWqWVI02WKwTv7Sl3xbD5L1RQUdMw3J5e5GdKho/E1tLvw3GV9M4DisZlWsMzDfyD1FwNgS6tMEgWVxB39Ct9qPvfveg/PQwyaq39PujNR60OE0vMyoX+a93JjxmMJpdKu+7vaBRjW+9GmblItOjhfJlVvHrO9tcgxFT60u+mkOrOuHw+5tcJWGntrxda15TMVNrhl27xbvbTY9X0HqNNRLJvzHHE1aVyW3ju6XsEy7wfQYyDgOl6DTaJerXR0HeB1SgJSBUAuydvy0UTQbCDVSdAvNeRA3UpU6BhUTMNlXhN/gDzRBr/0qvQMzlv+IeLACE4BgjYOQh4q4ZmXKBLnfFMCaYyUMZd6YxJpjJw4/qNyeYSUP0yBVoDzqXhAChmn3NAiGxqOYcQWEIkLRgiecVhRACDWF28kDCpS90jF4VTDy4ZoEbhEBTOK8wBIkzWkjLKAeUGaW3C1E5tIrPFJjUry9pGaWg8rxtOXRiEKoGmFaBsC7k3DI1CixiuiTkXB7IdrTAkugpBi5zSG0XogTayjpIgctb0LrcEyrz5FPpZ4j7CrX6Z2ATqda7GGDZGq0Xorh6Ekr9F7gUvg+tEw0soM1WfUQMlECt226Md2aL0tsKYCKm0tMvsCqttJQSgAqVdiGwIoFShcB02rtCGe4K7wrvCuW5K7wrvCuU567wrrAFCoFP6+hUePvnQ2SGjFaFOE+UVoU4T5RShUB/qVaFBCu7pPRiBlgm2vRKkSQ4hUp93kB/ot50Q1Qavtq7J9jDFw/8xPuGoP9AEpXeAQMfRdQaToMLN9EabYLrRKXRJgWgF2b19iEqWmGgNBjDxa36ipPWQGui3mQL1FHf8lSKKKCXAxUrBH2KeqeaHH8JUKi7VAQi+1DzVONCjlGK1/wCAkiU1mABsCpq9Ub9wJeo1pPxA/sgtVC8cdvBLmui9hS8h2JecoLy0kIFzPJCyivTbCGXVcnUk7a/CjRjpD1r9e0fQl6vfrZXKxS6nMd1W6Iwn3DqxjDoqshqgmo+5D1pjcK6aW0PYZsk1upEzd6aI2oGTG1apLCmo1jtLdsxtZ1TSpPYTqnv62/LXFPfNdWG7bdb7E7rCmzLvobjXWzFXMPpQmclbX0VeCF9bThD8eoqKXcNF3CjMtX7a6jDfJ5NfSfyfcPap1N+lUi1RbF2IO71dX+JiByFleYLYUwcmOJOpBDyhofi6RSVoaB2OiUP9VSpWoX1vIhnUBrbzjpUHKFznOKqmyn12ABrfzkqPTbIci45A4UKwa/PqyuHCe5CR10wH/tYeIqyqyi69NnoCqiKV8SP0Zw3aVV/IfwjnTmfejoRluN1hJpSdQRKLDlFTShYU+8BaxmnwLz1E1Ss+4AHAQ1oiKyFvT56HvlPsckxWrBxhSU2LTA/ZQgLxJW8LkU0F4Ni8JlJnUSk48KALyaxiRPFORZSPo1rCRTLVUB6D22IOPqvKVDkxI8sZ1aFl4tXfjpCucDiWvECG3NBXhaP5k875uM4Di4Ted0huuPNq2hhLiVIHk8SIybDtLpICYGO81HloJGLiCZlRVcWTrfaeKX3qyr7JbJ9jOSHXUsb/aBj00g+7O2Oi3k1ScwNjyqVB1gHJo2EeyKoDotuiXH54BtFlY+q65FXJpJSVNmd2mSnX1IxdV5aeuwlPf0ki3+wMvBArKK/o6xQN3uqU1ptuc6CX5XFX0GPlX6HZJ7uF/I47TNqc6yGabhrJ0jn1zgKVudjMYyiKBnwK4+8PW8B2OQ4/wO0jJg01bFlgwAAAABJRU5ErkJggg=="}} />
           </View>
          </View>
            <View style={{marginTop:30,marginLeft:15,}}><Text style={{fontSize:20, fontWeight:"bold",color:"black" }}>  Email</Text></View>
          <View style={{marginTop:10,marginLeft:20,marginRight:10,padding:10,justifyContent:"center",borderColor:"#dd0ffc",borderWidth:2,borderRadius:10,}}>
            <TextInput placeholder='someone@example.com' placeholderTextColor="black"></TextInput>
            </View>
            <View style={{marginTop:15,marginLeft:15}}><Text style={{fontSize:20, fontWeight:"bold",color:"black" }}>  Password</Text></View>
          <View style={{marginTop:10,marginLeft:20,marginRight:10,padding:10,justifyContent:"center",borderColor:"#dd0ffc",borderWidth:2,borderRadius:10,elevation:30}}>
            <TextInput placeholder='********' placeholderTextColor="black"></TextInput>
            </View>

            <View style={{marginTop:30,marginLeft:20,marginRight:10,padding:10,justifyContent:"center",backgroundColor:"#dd0ffc",alignItems:"center",borderRadius:20,elevation:30}}>
              <Pressable onPress={login}><Text style={{fontSize:20, fontWeight:"bold",color:"white"}}>Login</Text></Pressable>
            </View>

            <View style={{marginTop:20,marginLeft:15,justifyContent:"center",alignItems:"center",flexDirection:"row"}}><Text style={{fontSize:16,color:"black" }}>Don't have an account ?</Text>
            <Text style={{fontSize:16,color:"#dd0ffc",marginLeft:2 }}>Create new account</Text></View>

        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    googleLogo:{
      width:40,
      height:40,
    },
    appleLogo:{
      width:60,
      height:60,
    },
})


export default App;
