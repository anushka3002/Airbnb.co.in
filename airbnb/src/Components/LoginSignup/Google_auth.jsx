import React,{Component} from "react"
import GoogleLogin from "react-google-login"


export class Google_auth extends Component{

    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }
    
    render(){
        return(
            <div>
                <GoogleLogin
                clientId="1009641079467-v8ve5rfo6e4tgmlon3rs9nqhur89obmk.apps.googleusercontent.com"
                buttonText="Continue with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }}

export default Google_auth