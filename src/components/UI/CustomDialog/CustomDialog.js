import React from 'react';
import { StyleSheet } from 'react-native';
import { Dialog } from 'react-native-simple-dialogs';

import CustomDialogStyles from './CustomDialogStyles';

const styles = StyleSheet.create(CustomDialogStyles);

const CustomDialog = ({ dismissAction, isVisible, children }) => (
    <Dialog
        visible={!!isVisible}
        dialogStyle={styles.dialogContainer}
        onTouchOutside={() => dismissAction()}
        animationType="fade"
    >{children}</Dialog>
);

export default CustomDialog;