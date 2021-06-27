import React, { useState } from "react";
import {Formik, Form, Field} from 'formik';
import { MeDocument, MeQuery, useLoginMutation } from "../generated/graphql";
import { useRouter } from "next/router";
import { Button } from "./Button";


interface LoginProps {
    setisLogin: any
}

export const Login: React.FC<LoginProps> = (props) => {

    const router = useRouter(); 
    const [login] = useLoginMutation();
    const [allErrors, setAllErrors] = useState()

    return (
        <>
            <span className="login">
            <b><h1>Connexion</h1></b>

            <Formik
                initialValues={{usernameOrEmail: "", password: ""}}
                onSubmit={async (values) => {

                    const response = await login({
                        variables: values,
                        update: (cache, {data}) => {
                            console.log(cache)
                            cache.writeQuery<MeQuery>({
                                query: MeDocument,
                                data: {
                                  __typename: "Query",
                                  me: data?.login.user,
                                },
                              });
                        }
                    }); 

                    if(response.data?.login.errors){ 
                        response.data.login.errors.map((err:any) => {
                            setAllErrors(err.message)
                        })
                    } else if(response.data?.login.user){ 
                        router.push('/') 
                    }
                }}
            >
                {({isSubmitting}) => ( 
                    <Form>
                        <div className="inputs">
                            <Field name="usernameOrEmail" type="text" placeholder="Pseudo ou email"/>
                            <Field name="password" type="password" placeholder="Mot de passe"/>
                            <span className="error">{allErrors}</span>
                        </div>
                        {isSubmitting ? 
                            <p>loading</p>
                        :
                            <Button
                                text="Démarrer"
                                wButton="big"
                                cButton="orange"
                                isImage={false}
                                link=""
                                isClick={true}
                                isSubmit={true}
                            />
                        }
                    </Form>
                    )}
            </Formik>
            <a onClick={() => props.setisLogin(false)}>Créer un compte</a>
            </span>
        </>
    )
}