import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomInput from '../../components/UI/CustomInput/CustomInput';
import CustomButton from '../../components/UI/CustomButton/CustomButton';
import LinedHeading from '../../components/UI/LinedHeading/LinedHeading';
import LogoBlock from '../../components/UI/LogoBlock/LogoBlock';
import Aux from '../../components/HOC/Aux';

import startMainApp from '../startTabsScreen';
import { tryLogin } from '../../store/actions/index';

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
        },
        authMode: 'login',
    }

    loginHandler = () => {
        const { onTryLogin } = this.props;
        const {
            inputs: {
                email: { value: emailValue },
                password: { value: passwordValue }
            }
        } = this.state;
        const data = {
            email: emailValue,
            password: passwordValue,
        };

        onTryLogin(data);
        startMainApp();
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
                email: {
                    value: emailValue
                },
                password: {
                    value: passwordValue
                }
            },
            authMode,
        } = this.state;

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
                    />
                    <CustomInput
                        placeholder="Insert your password.."
                        onChangeText={(value) => this.inputChangeHandler('password', value)}
                        value={passwordValue}
                    />
                    <CustomInput
                        placeholder="Confirm your password.."
                        onChangeText={(value) => this.inputChangeHandler('password', value)}
                        value={passwordValue}
                    />
                    <CustomInput
                        placeholder="Your home address.."
                        onChangeText={(value) => this.inputChangeHandler('password', value)}
                        value={passwordValue}
                    />

                    <CustomButton
                        pressAction={this.loginHandler}
                        icon='user-plus'
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
                    />
                    <CustomInput
                        placeholder="Insert your password.."
                        onChangeText={(value) => this.inputChangeHandler('password', value)}
                        value={passwordValue}
                    />

                    <CustomButton
                        pressAction={this.loginHandler}
                        icon='sign-in'
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
                </ImageBackground>
            </View>
        );
    };
}

const mapDispatchToProps = dispatch => ({
    onTryLogin: (loginData) => dispatch(tryLogin(loginData)),
})

export default connect(null, mapDispatchToProps)(Auth);