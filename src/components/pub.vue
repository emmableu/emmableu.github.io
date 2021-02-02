<template>
    <v-card
            style="max-width: 45rem"
            >
        <v-divider/>
        <v-row
                justify="center"
                align="start"
                class= "py-5"
                style="background-color: #fafafa"
        >
            <v-col cols="3"
            >
                    <v-img
                            size="100%"
                            :aspect-ratio="12/9"
                            :src="'pubs/pubimgs/' +pub.key + '.png'"
                    >
                    </v-img>
            </v-col>
            <v-col style="line-height: 23px" cols="9" >

                   <a class="small-title" :href="pub.pdf">{{pub.TITLE}}</a><br>
                    <span v-for="a in pub.AUTHOR"
                          :key="a"
                          class="small-subtitle" v-text="a + ', '"></span>
                    <br>
                    <span class="small-cardbody">{{pub.conferenceKey}}</span>
                    <i class="small-cardbody" v-if="pub.hasOwnProperty('rate')">({{pub.rate}})</i><br>

                <span class="small-cardbody"> <a :href="pub.talk">talk</a> |
                    <a :href="pub.slides">slides</a> |
                    <a :href="pub.pdf">pdf</a> |
                    <a :href=" 'pubs/bibs/' + pub.key + '.bib'">bib</a>
                </span><br>

                <v-row class="pt-1">
                    <v-col>
                    <span
                            class="small-cardbody"
                            style="color: #FB8C00"
                    >
                     ABSTRACT
                    </span>
                    </v-col>

                    <v-spacer></v-spacer>

                    <v-btn
                            icon
                            @click="show = !show"
                    >
                        <v-icon
                        size="18px">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-row>

                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>
                        <v-card-text style="line-height: 23px; font-weight: 300" class="small-cardbody">
                            {{pub.abstractKey}}
                        </v-card-text>
                    </div>
                </v-expand-transition>
            </v-col>
        </v-row>

    </v-card>
</template>

<script>
    export default {
        name: "pub.vue",
        props: ["pub"],
        data: () => ({
            show: false,
            publicPath: process.env.BASE_URL
        }),
        methods: {
        }
    }
</script>

<style scoped>

</style>
