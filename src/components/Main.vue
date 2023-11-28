<template>
    <ion-page class="container">
        <ion-tabs>
            <ion-router-outlet/>
            <ion-tab-bar>
                <ion-tab-button tab="tab1" href="/main/tab1">
                    <ion-icon :icon="$options.icons.layersOutline"/>
                </ion-tab-button>

                <ion-tab-button tab="tab2" href="/main/tab2">
                    <ion-icon :icon="$options.icons.fileTrayStackedOutline"/>
                </ion-tab-button>

                <ion-tab-button tab="tab3" href="/main/tab3">
                    <ion-icon :icon="$options.icons.serverOutline"/>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonRouterOutlet,
    IonTabButton,
    IonTabs,
    IonTabBar,
    IonIcon
} from '@ionic/vue';

import {
    serverOutline,
    fileTrayStackedOutline,
    layersOutline,
} from 'ionicons/icons';

export default {
    icons:{
        serverOutline,
        fileTrayStackedOutline,
        layersOutline,
    },

    components: {
        IonPage,
        IonRouterOutlet,
        IonTabButton,
        IonTabs,
        IonTabBar,
        IonIcon,
    },
}
</script>

<style scoped>
.container{
    margin: 0 auto;
    max-width: 800px;
}
</style>