import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Pressable,StyleSheet,Image, Text, View,TextInput,} from 'react-native';


export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const[numero,setNumero]=useState('');
  const [senha, setSenha] = useState('');


  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
    <View style={styles.containerLogo}> 
    <Image 
    source={require('./src/img/topo.png')}
   
    />
    </View>
       
        <TextInput placeholder="Fullname" style={styles.textInput} onChangeText={text=>setNome(text)} />
        <TextInput placeholder="Email" style={styles.textInput} onChangeText={text=>setEmail(text)} />
        <TextInput placeholder="Phone Number" style={styles.textInput} onChangeText={text=>setNumero(text)} />
        <TextInput secureTextEntry={true} placeholder="Password" style={styles.textInput} onChangeText={text=>setSenha(text)} />
        
        <Pressable style={styles.button}>
          <Text style={{ color:'white',textAlign:'center'}}> REGISTER </Text>
      </Pressable>

      <Pressable style={styles.btnRegister}>
          <Text style={styles.registerText}> Already a member? Login </Text>
      </Pressable>
      
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'write',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },

  containerLogo:{
    
    flex:1,
    justifyContent:'space-between',
    
   

  },


  textInput:{
    width:'85%',
    height:40,
    borderRadius:20,
    paddingLeft:50,
    margin: 15,
    borderWidth: 1,
    
   },


  button:{
    width:'95%',
    height:40,
    backgroundColor:'#ff6600',
    borderRadius:20,
    justifyContent:'center',
    margin: 10,
    
  },
  
  btnRegister:{
    marginTop:20,

  },
  registerText:{
    color:'#fc6203',
    
  }

 
});
