<template>
    <div>
        <v-text-field v-model="messageText" label="Write your message post:" clearable class="mb-4"/>
        <v-btn @click="sendMessage" color="primary" class="mb-6">Send</v-btn>

        <v-list two-line>
            <v-list-item v-for="(msg, index) in messages" :key="index" class="mb-2" elevation="1">
                <v-list-content>
                    <v-list-item-title>{{  msg.txt }}</v-list-item-title>
                    <v-list-item-subtitle>{{ formatDate(msg.timestamp) }}</v-list-item-subtitle>
                </v-list-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const messageText = ref('');
const messages = ref([]);

const fetchMessages = async () => {
    try{
        const res = await axios.get('http://localhost:8008/api/messages');
        console.log('Messages successfully fetched', res.data);
        messages.value = res.data;
    } catch (err) {
        console.error('Message fetch failed', err);
    }
};

const sendMessage = async () => {
    if (!messageText.value) return;
    await axios.post('http://localhost:8008/api/messages', { text: messageText.value });
    messageText.value = '';
    fetchMessages();
};

const formatDate = (datestamp) => new Date(timestamp).toLocaleString();

onMounted(fetchMessages);
</script>