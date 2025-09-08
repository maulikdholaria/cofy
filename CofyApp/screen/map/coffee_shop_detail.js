import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CoffeeShopDetail = ({ route, navigation }) => {
  const { shop } = route.params;

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="heart-outline" size={24} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="share-outline" size={24} color="#222" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.name}>{shop.name}</Text>
        <Text style={styles.city}>{shop.city}</Text>
        <Text style={styles.desc}>{shop.description}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={14} color="#FFD700" />
          <Text style={styles.rating}>{shop.rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 36,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  backBtn: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 6,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    marginLeft: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 6,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  city: {
    fontSize: 15,
    color: '#666',
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    color: '#888',
    marginBottom: 12,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 4,
    color: '#333',
  },
});

export default CoffeeShopDetail;
