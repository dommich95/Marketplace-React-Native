import React from 'react';
import { StyleSheet, Image,} from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup'

import { AppForm,AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
        <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
        >
            <AppFormField 
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon="account"
                    name='name'
                    placeholder="Name"
                    textConetentType="name"
                />
            <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email"
                    icon='email'
                    name='email'
                    keyboardType="email-address"
                    textConetentType="emailAddress"
                />
                <AppFormField 
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon="lock"
                    name='password'
                    placeholder="Password"
                    secureTextEntry={true}
                    textConetentType="password"
                />
                <SubmitButton title="Register" />   
        </AppForm>
      </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width:80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})

export default RegisterScreen;