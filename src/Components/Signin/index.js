import React from 'react'
import { FormButton, FormInput, FormLabel, FormWrap,FormH1,Text,FormContent,Form , Icon, Container} from './SigninElements'
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = () => {
    return (
        <div>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your Accountant</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required/>
                            
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required/>

                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot Password</Text>
                            <a class="btn btn-info mt-4" href="/">Return</a>
                        </Form>

                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default SignIn;
