import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomInput from '../../components/UI/CustomInput/CustomInput';
import CustomButton from '../../components/UI/CustomButton/CustomButton';
import FeedbackMessage from '../../components/UI/FeedbackMessage/FeedbackMessage';
import LinedHeading from '../../components/UI/LinedHeading/LinedHeading';
import LogoBlock from '../../components/UI/LogoBlock/LogoBlock';
import Aux from '../../components/HOC/Aux';

import { authUser } from '../../store/actions/index';

import backgroundImage from '../../assets/loginbg.png';

import AuthStyles from './AuthStyles';
import MainText from '../../components/UI/MainText/MainText';

const styles = StyleSheet.create(AuthStyles);

class Auth extends React.Component {
    state = {
        loginLoading: false,
        inputs: {
            email: {
                value: '',
                isValid: false,
                validationRules: {
                    isEmail: true,
                },
            },
            password: {
                value: '',
                isValid: false,
                validationRules: {
                    isPassword: true,
                },
            },
            confirmPassword: {
                value: '',
                isValid: false,
                validationRules: {
                    isPassword: true,
                },
            },
            homeAddress: {
                value: '',
                isValid: false,
                validationRules: {
                    isAddress: true,
                },
            },
        },
        authMode: 'login',
    }

    authHandler = () => {
        const { onAuth } = this.props;
        const { authMode } = this.state;
        const {
            inputs: {
                email: { value: emailValue },
                password: { value: passwordValue },
            }
        } = this.state;
        const data = {
            email: emailValue,
            password: passwordValue,
        };

        onAuth(data, authMode);
    }

    inputChangeHandler = (type, value) => {
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [type]: {
                    ...prevState.inputs[type],
                    value,
                }
            }
        }));
    }

    switchLoginMode = () => {
        this.setState(prevState => ({
            authMode: prevState.authMode === 'login' ? 'signup' : 'login',
        }));
    }

    render() {
        const { loginLoading } = this.state;
        const {
            inputs: {
                email: { value: emailValue },
                password: { value: passwordValue },
                confirmPassword: { value: confirmPasswordValue },
                homeAddress: { value: homeAddressValue },
            },
            authMode,
        } = this.state;
        const { signupError, loginError, authSuccessMessage, authLoading } = this.props;
        let backButtonContent;
        let authForm;
        let formHeading;

        if (authMode === 'signup') {
            backButtonContent = (
                <TouchableOpacity
                    style={styles.backButtonContainer}
                    onPress={this.switchLoginMode}
                >

                    <Icon name="angle-left" style={styles.backButtonIcon} />
                    <MainText style={styles.backButtonText}>Back</MainText>
                </TouchableOpacity>
            );
            authForm = (
                <View style={styles.inputContainer}>
                    <CustomInput
                        placeholder="Insert your email.."
                        onChangeText={(value) => this.inputChangeHandler('email', value)}
                        value={emailValue}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    <CustomInput
                        placeholder="Insert your password.."
                        onChangeText={(value) => this.inputChangeHandler('password', value)}
                        value={passwordValue}
                        autoCorrect={false}
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                    <CustomInput
                        placeholder="Confirm your password.."
                        onChangeText={(value) => this.inputChangeHandler('confirmPassword', value)}
                        value={confirmPasswordValue}
                        autoCorrect={false}
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                    <CustomInput
                        placeholder="Your home address.."
                        onChangeText={(value) => this.inputChangeHandler('homeAddress', value)}
                        value={homeAddressValue}
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                    {signupError && !authSuccessMessage
                        ? <FeedbackMessage type="error" message={signupError} />
                        : null}
                    {!signupError && authSuccessMessage
                        ? <FeedbackMessage type="success" message={authSuccessMessage} />
                        : null}
                    <CustomButton
                        pressAction={this.authHandler}
                        icon='user-plus'
                        disabled={authLoading}
                        showIndicator={authLoading}
                    >Register Now</CustomButton>
                </View>
            );
            formHeading = (
                <LinedHeading
                    lineWidth="17%"
                    titleWidth="50%"
                >New Account</LinedHeading>
            );
        } else {
            backButtonContent = <View style={styles.backButtonContainer}></View>;
            authForm = (
                <View style={styles.inputContainer}>
                    <CustomInput
                        placeholder="Insert your email.."
                        onChangeText={(value) => this.inputChangeHandler('email', value)}
                        value={emailValue}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    <CustomInput
                        placeholder="Insert your password.."
                        onChangeText={(value) => this.inputChangeHandler('password', value)}
                        value={passwordValue}
                        autoCorrect={false}
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                    {loginError && !authSuccessMessage
                        ? <FeedbackMessage type="error" message={loginError} />
                        : null}
                    {!loginError && authSuccessMessage
                        ? <FeedbackMessage type="success" message={authSuccessMessage} />
                        : null}

                    <CustomButton
                        pressAction={this.authHandler}
                        icon='sign-in'
                        disabled={authLoading}
                        showIndicator={authLoading}
                    >Login Now</CustomButton>
                </View>
            );
            formHeading = (
                <LinedHeading
                    lineWidth="22%"
                    titleWidth="40%"
                >Login</LinedHeading>
            );
        }

        return (
            <View style={styles.authContainer}>
                <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                    <KeyboardAvoidingView behavior="padding">
                        <ScrollView>
                            <View style={styles.mainContent}>
                                {backButtonContent}

                                <LogoBlock />

                                {formHeading}

                                {loginLoading ? <ActivityIndicator size="small" color="#fff" /> : authForm}

                                {authMode === 'login' && (<Aux>
                                    <LinedHeading
                                        lineWidth="22%"
                                        titleWidth="40%"
                                    >Or</LinedHeading>
                                    <View style={styles.inputContainer}>
                                        <CustomButton
                                            pressAction={this.switchLoginMode}
                                            icon="user-plus"
                                            containerStyle={{ backgroundColor: '#9bcbff' }}
                                        >Create New Account</CustomButton>
                                    </View>
                                </Aux>)}
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        );
    };
}

const mapStateToProps = state => ({
    loginError: state.authReducer.loginErrorMessage,
    signupError: state.authReducer.signupErrorMessage,
    authSuccessMessage: state.authReducer.successMessage,
    authLoading: state.authReducer.loading,
});

const mapDispatchToProps = dispatch => ({
    onAuth: (authData, authMode) => dispatch(authUser(authData, authMode)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth);