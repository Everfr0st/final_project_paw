<template>
    <PageHeader></PageHeader>
    

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kodoti Chat</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
    <!-- <link rel="stylesheet" href="./style.css"> -->
</head>

<body>
    <section id="app" class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Kodoti Chat</h1>
                <h2 class="subtitle">Powered by <a href="https://kodoti.com">kodoti.com</a></h2>

                <template v-if="step === 'nick'">
                    <div class="columns">
                        <div class="column is-6">
                            <div class="field has-addons">
                                <div class="control is-expanded">
                                    <input v-model="nick" class="input is-medium" type="text"
                                        placeholder="Ingrese su nick">
                                </div>
                                <div class="control">
                                    <a @click="signIn" class="button is-info is-medium">
                                        Ingresar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <!-- <div v-if="messages.length" class="chat-container">
                        <div v-for="item in messages" :key ="item" class="{ 'has-text-right': nick === item.nick }">
                            <div class="box chat-message" :class="{ 'me': nick === item.nick }">
                                <span class="has-text-weight-bold">{{ item.nick }}</span> - {{ item.message }}
                                <span
                                    class="is-italic has-text-grey-light is-size-7">{{ new Date(item.date).toLocaleDateString() }}</span>
                            </div>
                        </div>
                    </div> -->

                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <input v-model="message" class="input is-medium" type="text"
                                placeholder="Ingrese el mensaje">
                        </div>
                        <div class="control">
                            <a @click="enviarMensaje" class="button is-info is-medium">
                                Enviar
                            </a>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <footer v-if="step === 'chat'" class="hero-foot">
            <div class="container section has-text-centered">
                <p>Conectado como <b>{{ nick }}</b></p>
            </div>
        </footer>
    </section>

    
    <!-- <script src="/socket.io/socket.io.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="./chat.js"></script> -->
</body>

</template>

<script>
import PageHeader from "../Landing/pageHeader.vue";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

const socket = io("http://localhost:4000");

export default {
    name: 'Chat',
    components: {
    PageHeader,
    },
    methods: {
        enviarMensaje: () => {
            alert("Enviando mensaje...");
        },
        greet: function (event) {
        // `this` inside methods points to the Vue instance
        alert('Hello ' + this.name + '!');
        // `event` is the native DOM event
        if (event) {
            alert(event.target.tagName);
        }
        }
}
};

  

</script>

<style scoped>
body {
    background: #ddd;
}

.chat-container {
    max-height: 600px;
    overflow-y: scroll;
    padding: 0px 1.5rem;
}

.chat-message {
    margin-bottom: 1.5rem;
    display: inline-block;
}

.chat-message.me {
    background: #dcf8c6;
}
</style>

