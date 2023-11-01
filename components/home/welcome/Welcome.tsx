import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

import { tab, tabText } from './welcome.style';

interface WelcomeProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const Welcome = (props: WelcomeProps) => {
  const [activeJobType, setActiveJobType] = React.useState('');
  const router = useRouter();

  const jobTypes = ['Full Time', 'Part Time', 'Internship', 'Freelance'];

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Miguel</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={props?.searchQuery}
            // in react native, we don't need e.target.value
            // instead queryTextEvent.nativeEvent.text gives you the new value of the text input, which is what you want to pass to setSearchQuery
            onChangeText={(queryText) => {props?.setSearchQuery(queryText)}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={props?.handleSearch}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          keyExtractor={(item) => item} // key like .map()
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}>
              <Text style={tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
