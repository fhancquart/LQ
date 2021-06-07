import React, { useState } from "react";
import {Formik, Form, Field} from 'formik';
import { Button } from "../components/Button";
import { useRegisterMutation } from "../generated/graphql";
import { useRouter } from "next/router";
import { toErrorMap } from "../utils/ToErrorMap";


interface RegistrationProps {
    setisLogin: any
}

export const Registration: React.FC<RegistrationProps> = (props) => {

    const router = useRouter(); 
    const [register] = useRegisterMutation();
    const [allErrors, setAllErrors] = useState();

    return (
        <>
            <span className="registration">
            <b><h1>Nouveau joueur</h1></b>

            <Formik
                initialValues={{email: "", username: "", password: ""}}
                onSubmit={async (values) => {

                const response = await register({variables: {options: values}});

                console.log(response)

                if(response.data?.register.errors){ 
                    response.data.register.errors.map((err:any) => {
                        setAllErrors(err.message)
                    })
                } else if(response.data?.register.user){ 
                    router.push('/') 
                }
            }}
            >
            {({isSubmitting}) => ( 
                <Form>
                    <div className="inputs">
                        <Field name="email" type="text" placeholder="Email"/>
                        <Field name="username" type="text" placeholder="Pseudo"/>
                        <Field name="password" type="password" placeholder="Mot de passe"/>
                        <span className="error">{allErrors}</span>
                    </div>
                    <button type="submit" className="big-button orange-button"><div className="card1"></div><span className="maj">D</span><span>é</span><span>m</span><span>a</span><span>r</span><span>r</span><span>e</span><span>r</span></button>
                </Form>
                )}
            </Formik>
                <a onClick={() => props.setisLogin(true)}>Se connecter</a>
            </span>
        </>
    )
}