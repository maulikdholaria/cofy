import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CoffeeShopCard = ({ shop, onPress, showClose, onClose }) => (
  <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
    <View style={styles.info}>
      <Text style={styles.name}>{shop.name}</Text>
      <Text style={styles.city}>{shop.city}</Text>
      <Text style={styles.desc}>{shop.description}</Text>
      <View style={styles.ratingRow}>
        <Ionicons name="star" size={14} color="#FFD700" />
        <Text style={styles.rating}>{shop.rating}</Text>
      </View>
    </View>
    {showClose && (
      <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
        <Ionicons name="close" size={20} color="#333" />
      </TouchableOpacity>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    position: 'relative',
  },
  info: {
    paddingRight: 32,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  city: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
  },
  desc: {
    fontSize: 12,
    color: '#888',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 4,
    color: '#333',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 4,
  },
});

export default CoffeeShopCard;
