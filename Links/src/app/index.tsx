import { Alert, FlatList, Image, Modal, Text, TouchableOpacity, View, Linking } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { router } from 'expo-router'


export default function Index() {

  return (
<View style={styles.container}>

  <TouchableOpacity onPress={() => router.navigate("/index2/index2")}>
    <MaterialIcons 
      name='play-circle' 
      size={55} 
      color={colors.green[300]} 
    />
  </TouchableOpacity>

</View>


  );
}