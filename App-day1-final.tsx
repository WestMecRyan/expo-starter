import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  // State declaration: Creates a state variable 'count' and a function to update it 'setCount'
  // The initial value of count is set to 0
  const [count, setCount] = useState(0);

  return (
    // SafeAreaView ensures content is displayed in the safe area of the device
    // (avoiding notches, status bars, etc. on modern phones)
    <SafeAreaView style={styles.container}>
      {/* StatusBar configures the appearance of the device's status bar */}
      <StatusBar barStyle="dark-content" />
      
      {/* Main content container */}
      <View style={styles.content}>
        {/* Text components for displaying headings */}
        <Text style={styles.title}>Welcome to React Native!</Text>
        <Text style={styles.subtitle}>This is your first app</Text>
        
        {/* Counter section with its own container */}
        <View style={styles.counterContainer}>
          {/* Display the current count value */}
          <Text style={styles.counterText}>Counter: {count}</Text>
          
          {/* Container for the increment and decrement buttons */}
          <View style={styles.buttonContainer}>
            {/* Button to increase the count */}
            <Button 
              title="Increment" 
              onPress={() => setCount(count + 1)}
            />
            
            {/* Button to decrease the count with custom color */}
            <Button 
              title="Decrement" 
              onPress={() => setCount(count - 1)}
              color="#841584"
            />
          </View>
          
          {/* Button to reset the count to zero */}
          <Button 
            title="Reset" 
            onPress={() => setCount(0)}
            color="#777"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// StyleSheet.create is the recommended way to create styles in React Native
// It helps with performance optimizations and provides better error messages
const styles = StyleSheet.create({
  container: {
    flex: 1,                  // Take up all available space
    backgroundColor: '#f5f5f5', // Light gray background
  },
  content: {
    flex: 1,                  // Take up all available space
    alignItems: 'center',     // Center children horizontally
    justifyContent: 'center', // Center children vertically
    padding: 20,              // Add padding around all sides
  },
  title: {
    fontSize: 24,             // Large font size for title
    fontWeight: 'bold',       // Bold text
    marginBottom: 10,         // Space below the title
  },
  subtitle: {
    fontSize: 16,             // Medium font size
    color: '#666',            // Darker gray text
    marginBottom: 30,         // Larger space below subtitle
  },
  counterContainer: {
    backgroundColor: 'white', // White background for the counter section
    padding: 20,              // Internal padding
    borderRadius: 10,         // Rounded corners
    width: '100%',            // Take full width of parent
    alignItems: 'center',     // Center children horizontally
    shadowColor: '#000',      // Shadow settings for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,             // Elevation for Android shadow
  },
  counterText: {
    fontSize: 20,             // Large font for counter
    marginBottom: 20,         // Space below counter text
  },
  buttonContainer: {
    flexDirection: 'row',     // Arrange buttons horizontally
    justifyContent: 'space-between', // Space evenly between buttons
    width: '100%',            // Take full width of parent
    marginBottom: 15,         // Space below button container
  },
});