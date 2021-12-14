import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup'; //Sistema de validacion de formularios
import { user, userDetails } from '../../utils/userDB';

export default function LoginForm() {

  const [error, setError] = useState("");

  // validateOnChange hara que los errores se ejecuten cuando demos submit
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError('')
      const { username, password } = formValue;

      if (username !== user.username || password !== user.password) {
        setError('El usuario o la contraseña son incorrectos')
      } else {
        console.log('Inicio de sesion correcto');
        console.log(userDetails);
      }
    }
  })

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput placeholder="Usuario"
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput placeholder="Contraseña"
        style={styles.input}
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button title="Enviar" onPress={formik.handleSubmit}/>

      <Text style={styles.error}> { formik.errors.username} </Text>
      <Text style={styles.error}> { formik.errors.password} </Text>
      <Text style={styles.error}> { error } </Text>

    </View>
  )
}
// Con onChangeText modificamos el estado

function initialValues() {
  return {
    username: "",
    password: ""
  }
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria")
  }
}


const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20
  }

})