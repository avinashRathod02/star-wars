import colors from '@/colors';
import { hasTextLength, SCREEN_WIDTH } from '@/utils';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default (props) => {
  const { items } = props;
  return items.map((item) => {
    const { id, name, species } = item;
    const speciesName = species?.name;
    const speciesString = hasTextLength(speciesName) ? ` (${speciesName})` : '';
    return (
      <View style={styles.cont} key={id}>
        <Text style={styles.title}>{`${name}  ${speciesString}`}</Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  title: { fontWeight: '600', fontSize: 12, color: colors.black },
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
    backgroundColor: colors.gray1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 8,
    width: SCREEN_WIDTH * 0.38,
  },
});
