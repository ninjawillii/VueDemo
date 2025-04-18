<template>
    <v-container>
        <h1 class="text-h4 mb-4">Live Message Feed</h1>

        <v-list>
            <v-list-item v-for="(msg, index) in messages" :key="index" class="mb-2">
                <v-list-item-content>
                    <v-list-item-title>{{ msg.text }}</v-list-item-title>
                    <v-list-item-subtitle>{{ formatDate(msg.timestamp) }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Message{
    text: string;
    timestamp: string;
}

const messages = ref<Message[]>([]);

const fetchMessages = async () => {
    try {
        const res = await axios.get('http://localhost:8008/api/messages');
        messages.value = res.data;
    } catch (err) {
    console.error('Failed to fetch messages:', err);
  }
};

const formatDate = (timestamp: string) => {
  return new Date(timestamp).toLocaleString();
};

onMounted(fetchMessages);
</script>