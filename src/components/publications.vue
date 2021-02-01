<template>
    <v-container style="background-color: #fafafa">
    <pub v-for="pub in pubJson"
         :key="pub.key"
        :pub="pub"></pub>
    </v-container>
</template>
<script>
    import pub from './pub';
    import pubJson from "./json/pub_final.json";

    export default {
        name: 'publications',
        components:{
            pub
        },
        data: () => ({
            pubJson
        }),
        methods:{
        }
    }
</script>
