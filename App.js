import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createUserWithEmailAndPassword, auth } from './firebaseConfig.js';
import { useState } from 'react';

// import

export default function App() {
  let [email, setemail] = useState('')
  let [password, setpassword] = useState('')


  function signup() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }


  return (
    <View style={styles.mainBody}>
      <View style={styles.SignUpCard}>
        <Text style={styles.heading}>Sign Up</Text>
        <TextInput
          placeholder='Email'
          keyboardType='email-address'
          style={styles.email}
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <TextInput
          placeholder='Password'
          secureTextEntry={true}
          style={styles.password}
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <TouchableOpacity
          style={styles.Signupbtn}
          onPress={signup}
        >
          <Text style={styles.SignupbtnTxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignUpCard: {
    backgroundColor: "lightblue",
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 15,
    width: '80%',
    height: 'max-content'
  },
  email: {
    marginVertical: 5,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  password: {
    marginVertical: 5,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10
  },
  Signupbtn:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 15
  },
  SignupbtnTxt:{
    color: 'white',
    textAlign: 'center',
    fontSize: 25
  }
});
