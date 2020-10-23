import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'

// implemented without image with header
const Cards = () => {
    const users = [
        {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
        {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
        {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
        {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
        {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
    ]
    return (
        <ScrollView>
            {
                users.map((u, i) => {
                    return (
                        <Card containerStyle={{ padding: 5, borderBottomRightRadius: 20 }} >
                            <Avatar
                            rounded 
                            activeOpacity={0.7}
                            size="medium"
                                source={{
                                    uri:
                                        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                                }}
                            >
                            </Avatar>
                            <Text>
                                The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                        </Card>

                    );
                })
            }


        </ScrollView>

    )
}


export default Cards