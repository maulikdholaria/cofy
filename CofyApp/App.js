import React, { useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const App = () => {
  const scrollViewRef = useRef(null);
  const sectionRefs = useRef({});

  const scrollToSection = (sectionKey) => {
    if (sectionRefs.current[sectionKey]) {
      sectionRefs.current[sectionKey].measureLayout(
        scrollViewRef.current,
        (x, y) => {
          scrollViewRef.current.scrollTo({ y: y - 100, animated: true });
        }
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Main Content */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Header />
        
        {/* Trending Coffee Section */}
        <View
          ref={(ref) => (sectionRefs.current.coffee = ref)}
          style={styles.section}
        >
          <TrendingCoffeeSection />
        </View>
        
        {/* Top Locations Section */}
        <View
          ref={(ref) => (sectionRefs.current.locations = ref)}
          style={styles.section}
        >
          <TopLocationsSection />
        </View>
        
        {/* Invite Friends Section */}
        <View style={styles.section}>
          <InviteFriendsSection />
        </View>
        
        {/* Upcoming Events Section */}
        <View
          ref={(ref) => (sectionRefs.current.events = ref)}
          style={styles.section}
        >
          <UpcomingEventsSection />
        </View>
        
        {/* Featured Gear Section */}
        <View
          ref={(ref) => (sectionRefs.current.shop = ref)}
          style={styles.section}
        >
          <FeaturedGearSection />
        </View>
        
        <View style={{ height: 100 }} />
      </ScrollView>
      
      {/* Bottom Navigation */}
      <BottomNavigation scrollToSection={scrollToSection} />
    </SafeAreaView>
  );
};

const Header = () => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>c</Text>
      </View>
      <Text style={styles.brandText}>cofy</Text>
    </View>
    <Text style={styles.pageTitle}>Home</Text>
  </View>
);

const SectionHeader = ({ title, subtitle }) => (
  <View style={styles.sectionHeader}>
    <View>
      <Text style={styles.sectionSubtitle}>{subtitle}</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    <View style={styles.seeAllContainer}>
      <Text style={styles.seeAllText}>See All</Text>
      <Ionicons name="chevron-forward" size={16} color="#666" />
    </View>
  </View>
);

const TrendingCoffeeSection = () => {
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
      <SectionHeader 
        title="Trending Coffee" 
        subtitle="DISCOVER YOUR NEXT FAVORITE" 
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.horizontalContainer}>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const CoffeeCard = ({ coffee }) => (
  <View style={styles.coffeeCard}>
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
);

const TopLocationsSection = () => {
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
      <SectionHeader 
        title="Top Locations" 
        subtitle="POPULAR NEAR YOU" 
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.horizontalContainer}>
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const LocationCard = ({ location }) => (
  <View style={styles.locationCard}>
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
);

const InviteFriendsSection = () => (
  <TouchableOpacity style={styles.inviteContainer}>
    <Ionicons name="gift-outline" size={24} color="#FFFFFF" />
    <View style={styles.inviteText}>
      <Text style={styles.inviteTitle}>Invite friends</Text>
      <Text style={styles.inviteSubtitle}>Get $5 credit</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#FFFFFF" />
  </TouchableOpacity>
);

const UpcomingEventsSection = () => {
  const events = [
    {
      id: 1,
      date: 'Feb\n15',
      title: 'Ethiopian Coffee Cupping',
      location: 'Blue Bottle Coffee, Oakland',
      type: 'Cupping',
    },
    {
      id: 2,
      date: 'Feb\n20',
      title: 'Latte Art Masterclass',
      location: 'Intelligentsia Coffee, Venice',
      type: 'Workshop',
    },
    {
      id: 3,
      date: 'Mar\n1',
      title: 'Bay Area Coffee Festival',
      location: 'Golden Gate Park, San Francisco',
      type: 'Festival',
    },
  ];

  return (
    <View>
      <SectionHeader 
        title="Upcoming Events" 
        subtitle="DON'T MISS OUT" 
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.horizontalContainer}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const EventCard = ({ event }) => (
  <View style={styles.eventCard}>
    <View style={styles.eventDate}>
      {event.date.split('\n').map((line, index) => (
        <Text 
          key={index} 
          style={index === 1 ? styles.eventDay : styles.eventMonth}
        >
          {line}
        </Text>
      ))}
    </View>
    <View style={styles.eventInfo}>
      <Text style={styles.eventTitle}>{event.title}</Text>
      <Text style={styles.eventLocation}>{event.location}</Text>
    </View>
    <View style={styles.eventTypeContainer}>
      <Text style={styles.eventType}>{event.type}</Text>
    </View>
  </View>
);

const FeaturedGearSection = () => {
  const gear = [
    { id: 1, name: 'Coffee Grinder Pro', price: '$299.99', icon: 'settings-outline' },
    { id: 2, name: 'V60 Pour Over Kit', price: '$89.99', icon: 'funnel-outline' },
    { id: 3, name: 'Ceramic Coffee Mug', price: '$45', icon: 'cafe-outline' },
    { id: 4, name: 'Coffee Lover T-Shirt', price: '$29.99', icon: 'shirt-outline' },
  ];

  return (
    <View>
      <SectionHeader 
        title="Featured Gear" 
        subtitle="CURATED COLLECTION" 
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.horizontalContainer}>
          {gear.map((item) => (
            <GearCard key={item.id} gear={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const GearCard = ({ gear }) => (
  <View style={styles.gearCard}>
    <View style={styles.gearImage}>
      <Ionicons name={gear.iconName} size={30} color="#8B4513" />
    </View>
    <View style={styles.gearInfo}>
      <Text style={styles.gearName}>{gear.name}</Text>
      <Text style={styles.gearPrice}>{gear.price}</Text>
    </View>
  </View>
);

const BottomNavigation = ({ scrollToSection }) => (
  <View style={styles.bottomNav}>
    <TouchableOpacity 
      style={styles.bottomNavItem}
      onPress={() => scrollToSection('coffee')}
    >
      <Ionicons name="cafe-outline" size={20} color="#666" />
      <Text style={styles.bottomNavText}>Coffee</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
      style={styles.bottomNavItem}
      onPress={() => scrollToSection('locations')}
    >
      <Ionicons name="location-outline" size={20} color="#666" />
      <Text style={styles.bottomNavText}>Locations</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
      style={styles.bottomNavItem}
      onPress={() => scrollToSection('events')}
    >
      <Ionicons name="calendar-outline" size={20} color="#666" />
      <Text style={styles.bottomNavText}>Events</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
      style={styles.bottomNavItem}
      onPress={() => scrollToSection('shop')}
    >
      <Ionicons name="bag-outline" size={20} color="#666" />
      <Text style={styles.bottomNavText}>Shop</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  brandText: {
    fontSize: 18,
    fontWeight: '500',
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
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
  inviteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 16,
  },
  inviteText: {
    flex: 1,
    marginLeft: 16,
  },
  inviteTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  inviteSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
  },
  verticalEventsContainer: {
    paddingHorizontal: 16,
  },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    width: 300,
    marginRight: 16,
  },
  eventCardVertical: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    width: '100%',
  },
  eventDate: {
    alignItems: 'center',
    width: 50,
    marginRight: 16,
  },
  eventMonth: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDay: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 14,
    color: '#666666',
  },
  eventTypeContainer: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  eventType: {
    fontSize: 12,
    color: '#333333',
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

export default App;