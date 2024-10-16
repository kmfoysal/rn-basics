import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const ProfileModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.centeredView}>
        <Modal
          style={styles.modalView}
          transparent={true}
          animationType="fade"
          visible={modalVisible}
          //   onRequestClose={() => {
          //     Alert.alert("Modal has been closed.");
          //     setModalVisible(!modalVisible);
          //   }}
        >
          <View>
            <View>
              <Text>Welcome to profile</Text>
              <Pressable
                style={styles.closeBtn}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.btnText}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>

      <Pressable style={styles.openBtn} onPress={() => setModalVisible(true)}>
        <Text style={styles.btnText}>View More</Text>
      </Pressable>
    </View>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  openBtn: {
    width: "100px",
    backgroundColor: "#fcb6b6",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },

  closeBtn: {
    width: "100px",
    backgroundColor: "#483434",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },

  btnText: {
    color: "#202020",
    fontWeight: "600",
    fontSize: 13,
    textAlign: "center",
  },
});
