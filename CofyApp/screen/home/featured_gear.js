import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FeaturedGear = () => {
  const gear = [
    { id: 1, name: 'Coffee Grinder Pro', price: '$299.99', icon: 'settings-outline' },
    { id: 2, name: 'V60 Pour Over Kit', price: '$89.99', icon: 'funnel-outline' },
    { id: 3, name: 'Ceramic Coffee Mug', price: '$45', icon: 'cafe-outline' },
    { id: 4, name: 'Coffee Lover T-Shirt', price: '$29.99', icon: 'shirt-outline' },
  ];

  return (
    <View>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionSubtitle}>CURATED COLLECTION</Text>
          <Text style={styles.sectionTitle}>Featured Gear</Text>
        </View>
        <View style={styles.seeAllContainer}>
          <Text style={styles.seeAllText}>See All</Text>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.horizontalContainer}>
          {gear.map((item) => (
            <View key={item.id} style={styles.gearCard}>
              <View style={styles.gearImage}>
                <Ionicons name={item.icon} size={30} color="#8B4513" />
              </View>
              <View style={styles.gearInfo}>
                <Text style={styles.gearName}>{item.name}</Text>
                <Text style={styles.gearPrice}>{item.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 14,
    color: '#000000',
    marginRight: 4,
  },
  horizontalContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  gearCard: {
    width: 160,
    marginRight: 16,
  },
  gearImage: {
    width: 160,
    height: 120,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  gearInfo: {
    paddingHorizontal: 4,
  },
  gearName: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
    lineHeight: 18,
  },
  gearPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeaturedGear;
