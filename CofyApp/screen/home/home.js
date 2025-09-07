import React, { useRef } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TrendingCoffee from './trending_coffee';
import TopLocations from './top_locations';
import InviteFriends from './invite_friends';
import UpcomingEvents from './upcoming_events';
import FeaturedGear from './featured_gear';

const Home = () => {
  const scrollViewRef = useRef(null);
  const sectionRefs = {
    coffee: useRef(null),
    locations: useRef(null),
    events: useRef(null),
    shop: useRef(null),
  };

  const scrollToSection = (key) => {
    if (sectionRefs[key]?.current && scrollViewRef.current) {
      // Use findNodeHandle for native node, or use measure instead of measureLayout
      sectionRefs[key].current.measure(
        (x, y, width, height, pageX, pageY) => {
          scrollViewRef.current.scrollTo({ y: pageY - 100, animated: true });
        }
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topSpacer} />
        <View ref={sectionRefs.coffee}>
          <TrendingCoffee />
        </View>
        <View style={styles.sectionSpacer} />
        <View ref={sectionRefs.locations}>
          <TopLocations />
        </View>
        <View style={styles.sectionSpacer} />
        <InviteFriends />
        <View style={styles.sectionSpacer} />
        <View ref={sectionRefs.events}>
          <UpcomingEvents />
        </View>
        <View style={styles.sectionSpacer} />
        <View ref={sectionRefs.shop}>
          <FeaturedGear />
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
      <BottomNavigation scrollToSection={scrollToSection} />
    </View>
  );
};

const BottomNavigation = ({ scrollToSection }) => (
  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.bottomNavItem} onPress={() => scrollToSection('coffee')}>
      <Ionicons name="cafe-outline" size={20} color="#666" />
      <Text style={styles.bottomNavText}>Coffee</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomNavItem} onPress={() => scrollToSection('locations')}>
      <Ionicons name="location-outline" size={20} color="#666" />
      <Text style={styles.bottomNavText}>Locations</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomNavItem} onPress={() => scrollToSection('events')}>
      <Ionicons name="calendar-outline" size={20} color="#666" />
      <Text style={styles.bottomNavText}>Events</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomNavItem} onPress={() => scrollToSection('shop')}>
      <Ionicons name="bag-outline" size={20} color="#666" />
      <Text style={styles.bottomNavText}>Shop</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
    backgroundColor: '#FFFFFF',
  },
  topSpacer: {
    height: 32,
  },
  sectionSpacer: {
    height: 32,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomNavItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNavText: {
    fontSize: 10,
    color: '#666666',
    marginTop: 4,
  },
});

export default Home;
