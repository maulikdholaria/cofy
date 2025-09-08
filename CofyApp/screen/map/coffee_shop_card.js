import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CoffeeShopCard = ({ shop, onPress, showClose, onClose }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={onPress}
    activeOpacity={0.92}
  >
    <View style={styles.imageColumn}>
      <View style={styles.imagePlaceholder}>
        <Ionicons name="storefront-outline" size={40} color="#8B4513" />
      </View>
      <View style={styles.ratingRow}>
        <View style={styles.ratingBadge}>
          <Ionicons name="star" size={12} color="#FFD700" />
          <Text style={styles.ratingText}>{shop.rating}</Text>
        </View>
      </View>
    </View>
    <View style={styles.info}>
      <Text style={styles.name}>{shop.name}</Text>
      <Text style={styles.city}>{shop.city}</Text>
      <Text style={styles.desc}>{shop.description}</Text>
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
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    position: 'relative',
    minHeight: 100,
  },
  imageColumn: {
    alignItems: 'center',
    marginRight: 14,
    width: 60,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#D2B48C',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  ratingText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 4,
  },
  info: {
    flex: 1,
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
