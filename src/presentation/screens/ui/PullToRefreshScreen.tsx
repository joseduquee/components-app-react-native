import {RefreshControl, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {Title} from '../../components/ui/Title';
import {CustomView} from '../../components/ui/CustomView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useContext, useState} from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const { colors } = useContext(ThemeContext);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();
  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 4000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[ colors.primary, 'red', 'orange', 'green' ]}
          progressBackgroundColor={ colors.cardBackground }
          onRefresh={onRefresh}
        />
      }>
      <CustomView margin>
        <Title text="Pull to refresh" />
      </CustomView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
