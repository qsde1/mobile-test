<template>
    <ion-page class="ion-justify-content-start">
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    tab1
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-item-group class="content">
            <ion-list v-if="items && items.length > 0">
                <ion-item v-for="item in items">
                    <ion-label>
                        key: {{ item.key }}, value: {{ item.value }} 
                    </ion-label>
                    <ion-item>
                        <ion-button @click="removeItem(item.key)">remove</ion-button>
                    </ion-item>
                </ion-item>
            </ion-list>
    
            <template v-else>
                <ion-label>
                    storage is null
                </ion-label>
            </template>
    
            <ion-item-group class="input">
                <ion-label>add new item:</ion-label>
                <ion-item>               
                    <ion-input label="key:" v-model="key"/>
                </ion-item>
                <ion-item>               
                    <ion-input label="value:" v-model="value"/>
                </ion-item>
                <ion-item>
                    <ion-button @click="setItem()">set</ion-button>
                </ion-item>
            </ion-item-group>
        </ion-item-group>

    </ion-page>
</template>

<script>
    import store from '../storage/store'
    import {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonList,
        IonItem,
        IonLabel,
        IonItemGroup,
        IonInput,
        IonButton,
    } from '@ionic/vue';

    export default {
        store,
        components: {
            IonPage,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonList,
            IonItem,
            IonLabel,
            IonInput,
            IonItemGroup,
            IonButton,
        },

        data(){
            return {
                items: null,
                key: null,
                value: null,
            }
        },

        methods:{
          async getItems(){
            this.items = await this.$options.store.getItems();
          },

          async removeItem(key){
            await this.$options.store.removeItem(key);
            await this.getItems();
          },

          async setItem(){
                await this.$options.store.setItem(this.key, this.value);
                await this.getItems();
          }
        },

        async created(){
            await this.$options.store.create();
        },

        async ionViewWillEnter(){
            await this.getItems();
        },
    }

</script>

<style scoped>
.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
}

ion-page{
    margin: 0 auto;
}

ion-label{
    text-align: center;
}

.input{
    margin: 50px auto;
    max-width: 500px;
}


ion-button{
    margin: 0 auto;    
}

ion-title{
    text-align: center;
    
}
</style>