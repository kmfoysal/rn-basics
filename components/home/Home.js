import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./homeStylesheet";
import ProfileModal from "./ProfileModal";

const Home = () => {
  return (
    <>
      <View>
        <Text style={styles.mainTitle}>Test App</Text>
      </View>
      <View style={styles.profileInfoWrapper}>
        <View>
          <Image
            style={styles.profileImageWrapper}
            source={require("../../assets/images/foysal.jpeg")}
          />
        </View>
        <View>
          <Text style={styles.infoText}>Name : K.M Foysal</Text>
          <Text style={styles.infoText}>Designation : Software Engineer</Text>
          <ProfileModal />
        </View>
      </View>
    </>
  );
};

export default Home;
