import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';

import * as Yup from "yup";
import { loginEmailPassword, loginFacebook, loginGoogle } from '../redux/actions/actionsLogin';
import {DivInicio, SubDiv, ButtonInicio } from '../styles/styled'
import '../styles/styles.css'
const Login = () => {

        const dispatch = useDispatch();
    
   const formik = useFormik({
    initialValues: {
       email: "",
       password: "",
    },
    validationSchema: Yup.object({
       email: Yup.string().email().required(),
       password: Yup.string().required(),
    }),
    onSubmit: (data) => {
       const { email, password } = data;
       dispatch(loginEmailPassword(email, password));
       console.log("hola" + {email})
    },
 });

 const handleGoogle = () => {
    dispatch(loginGoogle());
 };

 const handleFacebook = () => {
    dispatch(loginFacebook());
 };

  return (
    <DivInicio>
        <img src='https://res.cloudinary.com/paolavbm/image/upload/v1647486119/mega-bola_oyo599.png' width={100} alt=''/>
   <SubDiv>
    <h3>Iniciar sesión</h3>

    <form onSubmit={formik.handleSubmit}>
    <label for="correo">Dirección de correo electrónico</label>
    <input onChange={formik.handleChange} className="correo" name='email'/>
  

    <label for="password">Contraseña</label>
    <input onChange={formik.handleChange} type="password" className="password" name='password'/>


    <ButtonInicio type='submit'>Continuar</ButtonInicio>

    <span className='terminos'>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Amazonas.</span>
    </form>
<div className='iconos'>
    <button onClick={handleGoogle} id='boton'><img width={50} height={51} src='https://res.cloudinary.com/paolavbm/image/upload/v1646945872/Spring3-proyecto/logotipo-de-gmail_n2mpoa.png' alt=''/></button>
    <button onClick={handleFacebook} id='boton'><img width={50} height={45}  src='https://res.cloudinary.com/paolavbm/image/upload/v1646946262/Spring3-proyecto/facebook_2_ziubk4.png' alt=''/></button>
   
    </div>
    <div className='ya'>
    <span >Inicia sesión en Google o Facebook</span>
    </div>
   </SubDiv>



    </DivInicio>
  )
}

export default Login