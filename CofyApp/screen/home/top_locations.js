import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TopLocations = ({ onSeeAll }) => {
  const locations = [
    {
      id: 1,
      name: 'Blue Bottle Oakland',
      city: 'Oakland',
      description: 'Pour-over perfection and single-origin beans',
      rating: 4.7,
    },
    {
      id: 2,
      name: 'Intelligentsia Venice',
      city: 'Los Angeles',
      description: 'Direct trade coffee and expert brewing',
      rating: 4.6,
    },
    {
      id: 3,
      name: 'Stumptown Portland',
      city: 'Portland',
      description: 'Pioneer of third-wave coffee culture',
      rating: 4.8,
    },
  ];

  return (
    <View>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionSubtitle}>POPULAR NEAR YOU</Text>
          <Text style={styles.sectionTitle}>Top Locations</Text>
        </View>
        <TouchableOpacity style={styles.seeAllContainer} onPress={onSeeAll}>
          <Text style={styles.seeAllText}>See All</Text>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.horizontalContainer}>
          {locations.map((location) => (
            <View key={location.id} style={styles.locationCard}>
              <View style={styles.locationImage}>
                <View style={styles.locationRating}>
                  <Ionicons name="star" size={12} color="#FFD700" />
                  <Text style={styles.locationRatingText}>{location.rating}</Text>
                </View>
                <Ionicons name="storefront-outline" size={40} color="#8B4513" />
              </View>
              <View style={styles.locationInfo}>
                <Text style={styles.locationName}>{location.name}</Text>
                <Text style={styles.locationCity}>{location.city}</Text>
                <Text style={styles.locationDescription}>{location.description}</Text>
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
  locationCard: {
    width: 280,
    marginRight: 16,
  },
  locationImage: {
    width: 280,
    height: 160,
    backgroundColor: '#D2B48C',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    position: 'relative',
  },
  locationRating: {
    position: 'absolute',
    top: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  locationRatingText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 2,
  },
  locationInfo: {
    paddingHorizontal: 4,
  },
  locationName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  locationCity: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
  locationDescription: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 16,
  },
});

export default TopLocations;
