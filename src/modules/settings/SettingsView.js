// @flow
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import {
  View,
  Text,
} from 'react-native-ui-lib';
import tinycolor from 'tinycolor2';
import { SlidersColorPicker } from 'react-native-color';

import { commonStyles, colors } from '../../styles';


type Props = {
  navigation: {
    navigate: (string) => void,
  },
  settings: {
    batch: boolean,
    vibrate: boolean,
    beep: boolean,
    history: boolean,
    duplicate: boolean,
    backgroundColor: string,
    foregroundColor: string,
  },
  goPricingPage: () => void,
  isBackgroundModalVisible: boolean,
  isForegroundModalVisible: boolean,
  toggleBackgroundColorModal: () => void,
  toggleForegroundColorModal: () => void,
  handleBackgroundColorPick: (string) => void,
  handleForegroundColorPick: (string) => void,
  setSettingValue: (string, any) => void,
};

export const generateCodePreviewColors = (color: string) => ({
  backgroundColor: color,
  borderColor: tinycolor(color).isLight()
    ? colors.lightGray
    : colors.black,
});

export const SettingSwitch = (props: {value: boolean, onChange: (string, boolean) => void, name: string}) => (
  <Switch
    value={props.value}
    onValueChange={value => props.onChange(props.name, value)}
    testID="switch"
  />
);

export default function SettingsView(props: Props) {
  const recommendedColors = ['#247ba0', '#70c1b3', '#b2dbbf', '#f3ffbd', '#ff1654'];
  return (
    <SafeAreaView style={[commonStyles.safeArea, styles.viewContainer]}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.lightBlue}
      />
      <View centerH marginB-25 marginT-10>
        <Text h1 darkBlue>Settings</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View marginB-25>
          <View row spread>
            <Text h2 marginB-5 style={styles.textNormal}>Pro offer</Text>
            <TouchableOpacity onPress={props.goPricingPage}>
              <Text h3 primary>Subscribe</Text>
            </TouchableOpacity>
          </View>
          <Text gray>Unlock all features in application</Text>
        </View>
        <View marginB-25>
          <Text h2 marginB-10>Customization</Text>
          <View br10 paddingH-15 paddingT-25 paddingB-0 style={styles.settingBlock}>
            <View marginB-25>
              <View row spread>
                <Text h2 marginB-5 style={styles.textNormal}>Background color</Text>
                <TouchableOpacity
                  onPress={props.toggleBackgroundColorModal}
                  style={[
                    styles.colorPreview,
                    generateCodePreviewColors(props.settings.backgroundColor),
                  ]}
                />
              </View>
              <Text gray>Codes default background color</Text>
            </View>
            <View marginB-25>
              <View row spread>
                <Text h2 marginB-5 style={styles.textNormal}>Foreground color</Text>
                <TouchableOpacity
                  onPress={props.toggleForegroundColorModal}
                  style={[
                    styles.colorPreview,
                    generateCodePreviewColors(props.settings.foregroundColor),
                  ]}
                />
              </View>
              <Text gray>Codes default foreground color</Text>
            </View>
          </View>
        </View>
        <View marginB-25>
          <Text h2 marginB-10>General</Text>
          <View br10 paddingH-15 paddingT-25 paddingB-0 style={styles.settingBlock}>
            <View marginB-25>
              <View row spread centerV>
                <Text h2 marginB-5 style={styles.textNormal}>Batch scan</Text>
                <SettingSwitch
                  value={props.settings.batch}
                  onChange={props.setSettingValue}
                  name="batch"
                />
              </View>
              <Text gray marginR-50>Scan numbers if codes consecutively without interruption</Text>
            </View>
            <View marginB-25>
              <View row spread centerV>
                <Text h2 marginB-5 style={styles.textNormal}>Vibrate</Text>
                <SettingSwitch
                  value={props.settings.vibrate}
                  onChange={props.setSettingValue}
                  name="vibrate"
                />
              </View>
              <Text gray marginR-50>Vibrate if scan is successfull</Text>
            </View>
            <View marginB-25>
              <View row spread centerV>
                <Text h2 marginB-5 style={styles.textNormal}>Beep</Text>
                <SettingSwitch
                  value={props.settings.beep}
                  onChange={props.setSettingValue}
                  name="beep"
                />
              </View>
              <Text gray marginR-50>Beep if scan is successfull</Text>
            </View>
            <View marginB-25>
              <View row spread centerV>
                <Text h2 marginB-5 style={styles.textNormal}>History</Text>
                <SettingSwitch
                  value={props.settings.history}
                  onChange={props.setSettingValue}
                  name="history"
                />
              </View>
              <Text gray marginR-50>Save history of your scans</Text>
            </View>
            <View marginB-25>
              <View row spread centerV>
                <Text h2 marginB-5 style={styles.textNormal}>Duplicate scans</Text>
                <SettingSwitch
                  value={props.settings.duplicate}
                  onChange={props.setSettingValue}
                  name="duplicate"
                />
              </View>
              <Text gray marginR-50>Save duplicate scan result in history</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <SlidersColorPicker
        visible={props.isBackgroundModalVisible}
        color={tinycolor(props.settings.backgroundColor).toHsl()}
        returnMode="hex"
        onCancel={props.toggleBackgroundColorModal}
        onOk={props.handleBackgroundColorPick}
        swatches={recommendedColors}
        swatchesLabel="Recommended"
        okLabel="Done"
        cancelLabel="Cancel"
      />
      <SlidersColorPicker
        visible={props.isForegroundModalVisible}
        color={tinycolor(props.settings.foregroundColor).toHsl()}
        returnMode="hex"
        onCancel={props.toggleForegroundColorModal}
        onOk={props.handleForegroundColorPick}
        swatches={recommendedColors}
        swatchesLabel="Recommended"
        okLabel="Done"
        cancelLabel="Cancel"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    marginHorizontal: 15,
  },
  scrollView: {
    marginHorizontal: -15,
    paddingHorizontal: 15,
  },
  textNormal: {
    fontWeight: '300',
  },
  settingsBlockContainer: {
    marginBottom: 25,
  },
  settingBlock: {
    backgroundColor: colors.white,
    shadowColor: colors.darkBlue,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  colorPreview: {
    width: 25,
    height: 25,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
});
