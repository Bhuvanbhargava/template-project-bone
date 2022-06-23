import React from 'react';
import FacebookLogin from 'react-facebook-login';

export const FacebookLoginButton = () => {
    const responseFacebook = (response:any) => {
        console.log(response);
    }
    return (
        <FacebookLogin
            appId="577744400416045"
            autoLoad={true}
            fields="name,email,picture"

            callback={responseFacebook}/>

    );
}
export default FacebookLoginButton;