import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
  {
    id: 4,
    name: 'Sumatra Mandheling',
    shop: 'Coffee Collective',
    price: '$22.50',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'Guatemala Antigua',
    shop: 'Stumptown Coffee',
    price: '$19.99',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Kenya AA',
    shop: 'Verve Coffee Roasters',
    price: '$27.00',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    name: 'Costa Rica Tarrazu',
    shop: 'Sightglass Coffee',
    price: '$21.00',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    name: 'Brazil Santos',
    shop: 'Blue Bottle Coffee',
    price: '$17.99',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 9,
    name: 'Mocha Java',
    shop: 'Intelligentsia',
    price: '$23.50',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 10,
    name: 'Panama Geisha',
    shop: 'Verve Coffee Roasters',
    price: '$55.00',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 11,
    name: 'Yemen Mocha',
    shop: 'Stumptown Coffee',
    price: '$49.99',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 12,
    name: 'Sulawesi Toraja',
    shop: 'Coffee Collective',
    price: '$26.00',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 13,
    name: 'Jamaican Blue Mountain',
    shop: 'Blue Bottle Coffee',
    price: '$60.00',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 14,
    name: 'Peru Chanchamayo',
    shop: 'Sightglass Coffee',
    price: '$18.50',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 15,
    name: 'Tanzania Peaberry',
    shop: 'Intelligentsia',
    price: '$25.00',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 16,
    name: 'Mexico Chiapas',
    shop: 'Local Roaster',
    price: '$16.99',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 17,
    name: 'Colombia Huila',
    shop: 'Stumptown Coffee',
    price: '$20.00',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 18,
    name: 'Ecuador Loja',
    shop: 'Coffee Collective',
    price: '$22.00',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 19,
    name: 'Papua New Guinea',
    shop: 'Sightglass Coffee',
    price: '$24.00',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 20,
    name: 'Rwanda Bourbon',
    shop: 'Verve Coffee Roasters',
    price: '$21.50',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  },
];

const TrendingCoffeeList = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Ionicons name="arrow-back" size={24} color="#222" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Trending Coffee</Text>
    </View>
    <FlatList
      data={coffees}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.listContent}
      renderItem={({ item }) => (
        <View style={styles.coffeeCard}>
          <View style={styles.coffeeImage}>
            <Image
              source={{ uri: item.image }}
              style={styles.coffeeImageImg}
              resizeMode="cover"
            />
          </View>
          <View style={styles.coffeeInfo}>
            <Text style={styles.coffeeName}>{item.name}</Text>
            <Text style={styles.coffeeShop}>{item.shop}</Text>
            <View style={styles.coffeeBottom}>
              <Text style={styles.coffeePrice}>{item.price}</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={12} color="#FFD700" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backBtn: {
    marginRight: 12,
    padding: 4,
    borderRadius: 16,
    backgroundColor: '#f2f2f2',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  listContent: {
    padding: 16,
  },
  coffeeCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    overflow: 'hidden',
  },
  coffeeImage: {
    width: 100,
    height: 90,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
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
    bottom: 8,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 4,
  },
  coffeeInfo: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 12,
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

export default TrendingCoffeeList;
