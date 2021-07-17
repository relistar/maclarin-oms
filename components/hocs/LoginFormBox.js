import theme from "../../shared/theme";
import {Flex} from "rebass";
import styled from "@emotion/styled";
import {Formik} from 'formik';
import Button from "../Button";
import Input from "../Input";

const LoginFormHeadingStyled = styled.h1`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.p22};
  margin-bottom: 12px;
`

const LoginFormSubHeadingStyled = styled.span`
  font-size: ${props => props.theme.fontSizes.p14};
  margin-bottom: 33px;
  text-align: center;
`

const LoginFormStyled = styled.form`
  max-width: 294px;
  width: 100%;
`

const LoginFormInputStyled = styled.div`
  margin-bottom: 10px;
`

const LoginFormSubmitStyled = styled.div`
  margin-top: 18px;
`

const messages = {
    username: {
        valid: 'Логин введен',
        invalid: 'Введите логин'
    },
    password: {
        valid: 'Пароль введен',
        invalid: 'Введите пароль'
    }
}

export default function LoginFormBox() {
    function validate(values) {
        const errors = {};

        if (!values.username) {
            errors.username = messages.username.invalid;
        }

        if (!values.password) {
            errors.password = messages.password.invalid;
        }

        return errors;
    }

    function handleSubmit(values, {setSubmitting}) {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }

    return (
        <Flex theme={theme}
              variant='loginFormBoxWrap'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'>

            <Flex variant='loginFormBox' theme={theme} flexDirection='column' alignItems='center'>
                <LoginFormHeadingStyled>Авторизация</LoginFormHeadingStyled>
                <LoginFormSubHeadingStyled>
                    Пожалуйста, введите свой логин и пароль, чтобы авторизоваться
                </LoginFormSubHeadingStyled>

                <Formik
                    initialValues={{username: '', password: ''}}
                    validate={validate}
                    onSubmit={handleSubmit}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting
                      }) => (
                        <LoginFormStyled onSubmit={handleSubmit}>
                            <LoginFormInputStyled>
                                <Input
                                    type="text"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    placeholder='Введите логин'
                                    disabled={isSubmitting}
                                    error={errors.username && touched.username && errors.username}
                                    success={touched.username && !errors.username && messages.username.valid}
                                    withStatusIcon
                                    withLabel
                                />
                            </LoginFormInputStyled>
                            <LoginFormInputStyled>
                                <Input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder='Введите пароль'
                                    disabled={isSubmitting}
                                    error={errors.password && touched.password && errors.password}
                                    success={touched.password && !errors.password && messages.password.valid}
                                    withStatusIcon
                                    withLabel
                                />
                            </LoginFormInputStyled>
                            <LoginFormSubmitStyled>
                                <Button size="xLarge" type="submit" disabled={isSubmitting}>Войти</Button>
                            </LoginFormSubmitStyled>
                        </LoginFormStyled>
                    )}
                </Formik>
            </Flex>
        </Flex>
    )
}