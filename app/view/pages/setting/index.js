import React from 'react';
import i18n from 'i18n';
import style from 'view/style';
import { View, Image, Appbar, Button } from 'view/components';


const Setting = ({ navigation }) => {
    const { settingLang } = i18n;
    const { settingStyle, appStyle, homeStyle } = style;

    return (
        <View style={appStyle.container}>
            <Appbar.Header style={appStyle.header}>
                <Appbar.Content title={settingLang.title} />
            </Appbar.Header>

            <View style={settingStyle.buttonArea}>

                <Button
                    mode="outlined"
                    color="#13a77f"
                    onPress={() => navigation.navigate('Detail')}
                    style={appStyle.button}>
                    {settingLang.go_detail}
                </Button>

            </View>
        </View>

    );
};

export default Setting;
