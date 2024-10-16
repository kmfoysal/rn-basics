import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainTitle: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#fcb6b6",
    backgroundColor: "#483434",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },

  profileInfoWrapper: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "start",
    alignItems: "center",
    marginBottom: 20,
  },

  profileImageWrapper: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: "hidden",
  },

  infoText: {
    color: "#202020",
    fontWeight: "500",
    fontSize: 13,
    marginBottom: 5,
  },

});
