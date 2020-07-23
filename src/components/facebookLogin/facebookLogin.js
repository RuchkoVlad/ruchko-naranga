import React, { Component } from "react";
import FacebookLoginBtn from "react-facebook-login";
import {Card} from "antd";
import {Meta} from "antd/es/list/Item";
import {Avatar} from "antd";
import {Button} from "antd";

export default class FacebookLogin extends Component{
    state = {
        auth: false,
        name: '',
        picture: '',
        email: ''
    }

    logOut = ()=>{
        this.setState({
            auth: false,
        })
    }


    responseFacebook = (response) => {
        console.log(response);
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url,
            email: response.email
        })
    }

    render() {
        let facebookData;

        this.state.auth ?
            facebookData = (

                <Card style={{ width: 300 }}>
                    <Meta
                        avatar={<Avatar src={this.state.picture} />}
                        title={this.state.name}
                        description={this.state.email}
                    />
                    <Button style={{margin: '25px 75px 0'}}
                        danger
                        onClick={this.logOut}>
                        Log Out
                    </Button>
                </Card>
            ) :
            facebookData = (
                <FacebookLoginBtn
                    appId="340445820284612"
                    autoLoad={true}
                    style={{margin: '30px'}}
                    isMobile={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            )

        return (
            <div>
                {facebookData}
            </div>
        );
    }
}