import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TrendingCoffee = () => {
  const coffees = [
    {
      id: 1,
      name: 'Ethiopian Yirgacheffe',
      shop: 'Blue Bottle Coffee',
      price: '$18.99',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Hawaiian Kona',
      shop: 'Kona Coffee',
      price: '$45',
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Colombian Supremo',
      shop: 'Local Roaster',
      price: '$24.99',
      rating: 4.6,
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
                <Ionicons name="bag-outline" size={40} color="#8B4513" />
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
