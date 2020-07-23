import React, { Component } from "react";
import FacebookLoginBtn from "react-facebook-login";
import {Card} from "antd";
import {Meta} from "antd/es/list/Item";
import {Avatar} from "antd";

export default class FacebookLogin extends Component{
    state = {
        auth: false,
        name: '',
        picture: '',
        email: ''
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
                </Card>
            ) :
            facebookData = (
                <FacebookLoginBtn
                    appId="340445820284612"
                    autoLoad={true}
                    style={{margin: '30px'}}
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