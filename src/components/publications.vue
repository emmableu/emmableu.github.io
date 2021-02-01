<template>
    <v-container style="background-color: #fafafa">

        <v-row class="py-3">
            <v-col class="mx-3">
        <p>Here's a selected list of my peer-reviewed publications. A more comprehensive list can be found at my <a href="https://scholar.google.com/citations?user=OEWd96cAAAAJ&hl=en">Google Scholar profile</a>.</p>
            </v-col></v-row>
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
