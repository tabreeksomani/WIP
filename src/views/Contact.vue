<template>
    <v-form @submit.prevent="submitForm">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="formData.name" label="Name" required></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="formData.email" label="Email" required></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="formData.subject" label="Subject" required></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-textarea v-model="formData.message" label="Message" required></v-textarea>
                </v-col>
                <v-col cols="12">
                    <v-btn color="primary" type="submit" :href="componseEmailLink">Send</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
  
<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                subject: '',
                message: '',
            },
        };
    },
    computed: {
        composeEmailLink() {
            const recipient = 'xocehig284@sparkroi.com'; // Replace with recipient's email address
            const subject = 'Contact Form: ' + this.formData.subject

            // Encode the email body, name, subject, and email using encodeURIComponent to handle special characters
            const body = encodeURIComponent(
                `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\n\n${this.formData.message}`
            );

            // Generate the mailto link
            return `mailto:${recipient}?subject=${subject}?body=${body}`;
        },
    },
    methods: {
        submitForm() {
            // Your email sending logic here
            // For example, you can use the "mailto" approach as shown in the previous examples
        },
    },
};
</script>
  