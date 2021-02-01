<template>
    <v-card
            style="max-width: 45rem">
        <v-divider/>
        <v-row
                justify="center"
                align="start"
                class= "py-10"
                style="background-color: #fafafa"
        >
            <v-col cols="3"
            >
                    <v-img
                            size="100%"
                            :aspect-ratio="16/9"
                            :src="'pubs/pubimgs/' +pub.key + '.png'"
                    >
                    </v-img>
            </v-col>
            <v-col cols="9" >
                   <p><strong> {{pub.TITLE}}</strong></p>
                    <p>{{pub.AUTHOR}}</p>
                    <p v-if="pub.hasOwnProperty('rate')">{{pub.rate}}</p>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: "pub.vue",
        props: ["pub"]
    }
</script>

<style scoped>

</style>
