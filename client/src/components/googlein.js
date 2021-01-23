import react from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '522569131287-foq5soobc60pr3qrrtd4ihv5ofvta211.apps.googleusercontent.com';

function Login(){
    const onSuccess = (res) =>{
        console.log('[login success] current user : ', res.profileObj)
    };

    const onFailure = (res) => {
        console.log('login failed : res : ', res);
    };

    return(
        <div>
        <GoogleLogin
        clientID={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{marginTop:'100px'}}
        isSignedIn={true}
        />
        </div>
    );
}