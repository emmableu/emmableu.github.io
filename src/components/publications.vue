<template>
    <v-container style="background-color: #fbfbfb">

<!--        <v-row class="py-3">-->
<!--            <v-col class="mx-3">-->
<!--        <p>Here's a selected list of my peer-reviewed publications. A more comprehensive list can be found at my <a href="https://scholar.google.com/citations?user=OEWd96cAAAAJ&hl=en">Google Scholar profile</a>.</p>-->
<!--            </v-col></v-row>-->
    <template v-for="pubCurYear in pubByYear"
        >
        <v-row :key="pubCurYear.year" style="height: 80px;" align="center">
        <v-col  :align-self="left"
                >
        <span class="small-title" >{{pubCurYear.year}}</span>
        </v-col>
        </v-row>
    <pub v-for="pub in pubCurYear.pubsInYear"
         :key="pub.key"
        :pub="pub"></pub>
    </template>
    </v-container>
</template>
<script>
    import pub from './pub';
    import pubByYear from "./json/pub_final.json";

    export default {
        name: 'publications',
        components:{
            // eslint-disable-next-line vue/no-unused-components
            pub
        },
        data: () => ({
            pubByYear
        }),
        methods:{
        }
    }
</script>
