import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UpcomingEvents = () => {
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
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionSubtitle}>DON'T MISS OUT</Text>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
        </View>
        <View style={styles.seeAllContainer}>
          <Text style={styles.seeAllText}>See All</Text>
        </View>
      </View>
      <View style={styles.verticalEventsContainer}>
        {events.map((event) => (
          <View key={event.id} style={styles.eventCardVertical}>
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
        ))}
      </View>
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
  verticalEventsContainer: {
    paddingHorizontal: 16,
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
});

export default UpcomingEvents;
