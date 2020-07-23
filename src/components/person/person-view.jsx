import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from "../facebookLogin/facebookLogin";
import {Card, Space} from "antd";
import {Avatar} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {Descriptions} from "antd";

const Person = ({allPeople}) => (
    <Fragment>
        <FacebookLogin/>
        {allPeople.map(person => {
            const {
                name,
                birth_year: birthYear,
                gender,
                hair_color: hairColor,
                height,
                mass,
            } = person;

            return (
                <Space size="large" key={name} style={{background: 'gray'}}>
                    <Card title={name}
                          extra={<Avatar size={45} icon={<UserOutlined/>}/>}
                          style={{width: 300, marginRight: '20px',}}
                          align="center"
                          key={name}>
                        <Descriptions column={1}>
                            <Descriptions.Item label="Name">{name}</Descriptions.Item>
                            <Descriptions.Item label="Birthday">{birthYear}</Descriptions.Item>
                            <Descriptions.Item label="Sex">{gender}</Descriptions.Item>
                            <Descriptions.Item label="Hair color">{hairColor}</Descriptions.Item>
                            <Descriptions.Item label="Height">{height}</Descriptions.Item>
                            <Descriptions.Item label="Weight">{mass}</Descriptions.Item>
                        </Descriptions>
                    </Card>
                </Space>
            );
        })}
    </Fragment>
);

Person.defaultProps = {
    allPeople: [],
};

Person.propTypes = {
    allPeople: PropTypes.arrayOf(PropTypes.object),
};

export default Person;
