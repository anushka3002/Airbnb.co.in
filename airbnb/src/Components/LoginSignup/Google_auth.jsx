import React,{Component} from "react"
import GoogleLogin from "react-google-login"
import Styles from "./Signup.module.css"

export class Google_auth extends Component{

    responseGoogle=(response)=>{
        console.log(response);
        console.log("hellooooo",response.profileObj);
        localStorage.setItem("google_pic",JSON.stringify(response.profileObj));
    }
    
    render(){
        return(
            <div>
                <GoogleLogin
                clientId="1009641079467-v8ve5rfo6e4tgmlon3rs9nqhur89obmk.apps.googleusercontent.com"
                buttonText=""
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }}

export default Google_auth