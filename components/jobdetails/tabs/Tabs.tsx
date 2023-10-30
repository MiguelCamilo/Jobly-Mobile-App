import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './tabs.style';
import { SIZES } from '../../../constants';
import { btn, btnText } from './tabs.style';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

interface TabButtonProps {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
}

const Tabs = (props: TabsProps) => {
  const TabButton = (props: TabButtonProps) => (
    <TouchableOpacity 
      style={btn(props?.name, props?.activeTab)}
      onPress={props?.onHandleSearchType}
    >
      <Text style={btnText(props?.name, props?.activeTab)}>{props?.name}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={props?.tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={props?.activeTab}
            onHandleSearchType={() => props?.setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
