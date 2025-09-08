import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TrendingCoffee = () => {
  const coffees = [
    {
      id: 1,
      name: 'Ethiopian Yirgacheffe',
      shop: 'Blue Bottle Coffee',
      price: '$18.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1660001187826-d652159b338b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Hawaiian Kona',
      shop: 'Kona Coffee',
      price: '$45',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1584486171223-5e72652c1d42?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Colombian Supremo',
      shop: 'Local Roaster',
      price: '$24.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1563803941834-004ceb7478a2?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <View>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionSubtitle}>DISCOVER YOUR NEXT FAVORITE</Text>
          <Text style={styles.sectionTitle}>Trending Coffee</Text>
        </View>
        <View style={styles.seeAllContainer}>
          <Text style={styles.seeAllText}>See All</Text>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.horizontalContainer}>
          {coffees.map((coffee) => (
            <View key={coffee.id} style={styles.coffeeCard}>
              <View style={styles.coffeeImage}>
                <Image
                  source={{ uri: coffee.image }}
                  style={styles.coffeeImageImg}
                  resizeMode="cover"
                />
                {/* <Ionicons
                  name="bag-outline"
                  size={40}
                  color="#8B4513"
                  style={styles.coffeeIconOverlay}
                /> */}
              </View>
              <View style={styles.coffeeInfo}>
                <Text style={styles.coffeeName}>{coffee.name}</Text>
                <Text style={styles.coffeeShop}>{coffee.shop}</Text>
                <View style={styles.coffeeBottom}>
                  <Text style={styles.coffeePrice}>{coffee.price}</Text>
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={12} color="#FFD700" />
                    <Text style={styles.ratingText}>{coffee.rating}</Text>
                  </View>
                </View>
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
  coffeeCard: {
    width: 200,
    marginRight: 16,
  },
  coffeeImage: {
    width: 200,
    height: 180,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  coffeeImageImg: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderRadius: 12,
  },
  coffeeIconOverlay: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 16,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 4,
  },
  coffeeInfo: {
    paddingHorizontal: 4,
  },
  coffeeName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  coffeeShop: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  coffeeBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coffeePrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 2,
  },
});

export default TrendingCoffee;
