import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InviteFriends = () => (
  <TouchableOpacity style={styles.inviteContainer}>
    <Ionicons name="gift-outline" size={24} color="#FFFFFF" />
    <View style={styles.inviteText}>
      <Text style={styles.inviteTitle}>Invite friends</Text>
      <Text style={styles.inviteSubtitle}>Get $5 credit</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#FFFFFF" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  inviteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 24,
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
});

export default InviteFriends;
