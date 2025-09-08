import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import CoffeeShopCard from './coffee_shop_card';

const coffeeShops = [
  // Example data
  { id: 1, name: 'Blue Bottle Oakland', latitude: 37.808, longitude: -122.268, city: 'Oakland', description: 'Pour-over perfection and single-origin beans', rating: 4.7 },
  { id: 2, name: 'Intelligentsia Venice', latitude: 33.985, longitude: -118.469, city: 'Los Angeles', description: 'Direct trade coffee and expert brewing', rating: 4.6 },
  { id: 3, name: 'Stumptown Portland', latitude: 45.522, longitude: -122.675, city: 'Portland', description: 'Pioneer of third-wave coffee culture', rating: 4.8 },
];

const MapScreen = ({ navigation }) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedShop, setSelectedShop] = useState(null);

  const handleMarkerPress = (shop) => {
    setSelectedShop(shop);
    setSheetOpen(false);
  };

  const handleMapPress = () => {
    setSelectedShop(null);
  };

  const handleSheetOpen = () => {
    setSheetOpen(true);
    setSelectedShop(null);
  };

  const handleSheetClose = () => {
    setSheetOpen(false);
  };

  const handleCardPress = (shop) => {
    navigation.navigate('CoffeeShopDetail', { shop });
  };

  // Hide card when map moves
  const handleRegionChange = () => {
    setSelectedShop(null);
  };

  return (
    <View style={styles.container}>
      {/* Back button: only show when sheet is NOT open */}
      {!sheetOpen && (
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
      )}

      {!sheetOpen && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.808,
            longitude: -122.268,
            latitudeDelta: 10,
            longitudeDelta: 10,
          }}
          onPress={handleMapPress}
          onRegionChange={handleRegionChange}
        >
          {coffeeShops.map(shop => (
            <Marker
              key={shop.id}
              coordinate={{ latitude: shop.latitude, longitude: shop.longitude }}
              onPress={(e) => {
                e.stopPropagation && e.stopPropagation();
                setSelectedShop(shop);
                setSheetOpen(false);
              }}
            />
          ))}
        </MapView>
      )}

      {/* Floating button to open sheet when map is hidden */}
      {!sheetOpen && (
        <TouchableOpacity style={styles.pullUpBtn} onPress={handleSheetOpen}>
          <Ionicons name="chevron-up" size={28} color="#fff" />
        </TouchableOpacity>
      )}

      {/* Pull-up sheet */}
      {sheetOpen && (
        <View style={styles.sheet}>
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Coffee Shops</Text>
            <TouchableOpacity onPress={handleSheetClose}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={coffeeShops}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <CoffeeShopCard
                shop={item}
                onPress={() => handleCardPress(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
          {/* Floating icon to switch back to map */}
          <TouchableOpacity style={styles.fab} onPress={() => setSheetOpen(false)}>
            <Ionicons name="map" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      )}

      {/* Overlayed coffee shop card when marker is tapped */}
      {selectedShop && !sheetOpen && (
        <View style={styles.overlayCard} pointerEvents="box-none">
          <CoffeeShopCard
            shop={selectedShop}
            onPress={() => handleCardPress(selectedShop)}
            showClose
            onClose={() => setSelectedShop(null)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  map: { ...StyleSheet.absoluteFillObject },
  backBtn: {
    position: 'absolute',
    top: 44,
    left: 16,
    zIndex: 30,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 6,
    elevation: 4,
  },
  pullUpBtn: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    backgroundColor: '#000',
    borderRadius: 24,
    padding: 10,
    elevation: 6,
  },
  sheet: {
    position: 'absolute',
    left: 0, right: 0, bottom: 0, top: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 12,
    paddingTop: 24,
    paddingHorizontal: 0,
    zIndex: 10,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    backgroundColor: '#000',
    borderRadius: 24,
    padding: 12,
    elevation: 8,
  },
  overlayCard: {
    position: 'absolute',
    left: 0, right: 0, bottom: 0,
    padding: 16,
    zIndex: 20,
  },
});

export default MapScreen;
