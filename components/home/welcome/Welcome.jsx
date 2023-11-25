import { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';
const jobsTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Olá DEV</Text>
        <Text style={styles.welcomeMessage}>Procure vagas de seu interesse...</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="O que procura?"
          />
        </View>
        
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobsTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.tab(activeJobType, item)}
            onPress={() => {
              setActiveJobType(item);
              router.push(`/search/${item}`)
            }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome