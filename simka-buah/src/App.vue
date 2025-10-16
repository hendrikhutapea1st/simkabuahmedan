<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Gallery from './components/Gallery.vue'
import Testimoni from './components/Testimoni.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'
import ComingSoon from './components/ComingSoon.vue'
import FloatingButtons from './components/FloatingButtons.vue'

// Configuration for coming soon dates
// User can modify these values to set custom start and end times
// Make sure comingSoonStartTime is earlier than comingSoonEndTime

// Default dates (October 15, 2025, 19:00 - 19:49 same day)
const defaultStartTime = new Date('2025-10-16T13:00:00+07:00');
const defaultEndTime = new Date('2025-10-16T13:20:00+07:00');

// You can also get these values from localStorage or environment variables for configuration
const storedStartTime = localStorage.getItem('comingSoonStartTime');
const storedEndTime = localStorage.getItem('comingSoonEndTime');

// Parse stored dates or use defaults
let comingSoonStartTime = storedStartTime ? new Date(storedStartTime) : defaultStartTime;
let comingSoonEndTime = storedEndTime ? new Date(storedEndTime) : defaultEndTime;

// Validate that start time is before end time
if (comingSoonStartTime >= comingSoonEndTime) {
  console.error("Error: comingSoonStartTime must be earlier than comingSoonEndTime");
  console.warn("Using default dates due to validation error");
  comingSoonStartTime = defaultStartTime;
  comingSoonEndTime = defaultEndTime;
}

// Function to update coming soon times (can be called from elsewhere if needed)
function setComingSoonTimes(startTime, endTime) {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  if (startDate >= endDate) {
    console.error("Start time must be earlier than end time");
    return false;
  }

  comingSoonStartTime = startDate;
  comingSoonEndTime = endDate;

  // Store in localStorage for persistence
  localStorage.setItem('comingSoonStartTime', startDate.toISOString());
  localStorage.setItem('comingSoonEndTime', endDate.toISOString());

  console.log("Coming soon times updated successfully");
  return true;
}

// Example usage:
// setComingSoonTimes('2025-10-15T19:00:00+07:00', '2025-10-16T19:49:00+07:00');

// Make function available globally for admin configuration
// Can be called from browser console as: window.setComingSoonTimes('start', 'end')
window.setComingSoonTimes = setComingSoonTimes;

const showComingSoon = ref(false);

// Function to get real-time from device and check if we're in the special time range
const checkTimeRange = () => {
  const now = new Date(); // Get real-time from device
  const isDuringEvent = (now >= comingSoonStartTime && now <= comingSoonEndTime);

  // Log for debugging
  console.log(`Current time: ${now}`);
  console.log(`Start: ${comingSoonStartTime}`);
  console.log(`End: ${comingSoonEndTime}`);
  console.log(`Is now >= start: ${now >= comingSoonStartTime}`);
  console.log(`Is now <= end: ${now <= comingSoonEndTime}`);
  console.log(`Show Coming Soon: ${isDuringEvent}`);

  showComingSoon.value = isDuringEvent;
};

onMounted(() => {
  checkTimeRange();

  // Set up a timer to check regularly if needed
  // In case you want to dynamically change during the time period
  const now = new Date();
  const isDuringEventPeriod = now >= comingSoonStartTime && now <= comingSoonEndTime;

  // Only check every minute if we're during the event period
  if (isDuringEventPeriod) {
    const interval = setInterval(() => {
      checkTimeRange();
    }, 60000); // Check every minute

    // Clear the interval when component is unmounted
    onUnmounted(() => {
      clearInterval(interval);
    });
  }
});
</script>

<template>
  <div v-if="showComingSoon">
    <ComingSoon
      :start-time="comingSoonStartTime"
      :end-time="comingSoonEndTime"
    />
    <FloatingButtons />
  </div>
  <div v-else>
    <Header />
    <Hero />
    <Features />
    <Gallery />
    <Testimoni />
    <CTA />
    <Footer />
    <FloatingButtons />
  </div>
</template>
