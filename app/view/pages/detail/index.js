import React from 'react';
import i18n from 'i18n';
import style from 'view/style';
import { View, Appbar, Text, Button } from 'view/components';


const Detail = ({ navigation }) => {
    const { detailLang } = i18n;
    const { detailStyle, appStyle, homeStyle } = style;

    return (
        <View style={appStyle.container}>
            <Appbar.Header style={appStyle.header}>
                <Appbar.Action onPress={() => navigation.goBack()} icon="arrow-back" />
                <Appbar.Content title={detailLang.title} />
            </Appbar.Header>
            <View style={detailStyle.content}>
                <View style={{ height: '50%' }}>
                    <Text>{detailLang.content}</Text>
                </View>
                <Button onPress={() => { navigation.jumpTo('Elegant') }}
                    style={appStyle.button}

                    mode="outlined"
                    color="#13a77f">
                    {detailLang.go_home}
                </Button>
                {/* <View style={detailStyle.textContainer}>
                </View>
                <View style={detailStyle.buttonContainer}>

                    
                </View> */}
            </View>

        </View>

    );
};

export default Detail;
