import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const gear = [
  {
    id: 1,
    name: 'Coffee Grinder Pro',
    price: '$299.99',
    icon: 'settings-outline',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'V60 Pour Over Kit',
    price: '$89.99',
    icon: 'funnel-outline',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Ceramic Coffee Mug',
    price: '$45',
    icon: 'cafe-outline',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Coffee Lover T-Shirt',
    price: '$29.99',
    icon: 'shirt-outline',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
];

const FeaturedGear = () => (
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
              <Image
                source={{ uri: item.image }}
                style={styles.gearImageImg}
                resizeMode="cover"
              />
              {/* <Ionicons
                name={item.icon}
                size={30}
                color="#8B4513"
                style={styles.gearIconOverlay}
              /> */}
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
    position: 'relative',
    overflow: 'hidden',
  },
  gearImageImg: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderRadius: 12,
  },
  gearIconOverlay: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 12,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 4,
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
