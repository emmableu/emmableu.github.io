<template>
    <v-card
            tile
            style="max-width: 45rem"
            >
        <v-divider/>
        <v-row
                justify="center"
                align="start"
                class= "py-5"
                style="background-color: #fbfbfb"
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
                    <span class="small-title">
                   <a v-if="pub.hasOwnProperty('pdf')" :href="pub.pdf">{{pub.TITLE}}</a>
                    <span v-else> {{pub.TITLE}}</span>
                        </span><br>
                <template v-for=" (a, index) in pub.AUTHOR"
                >
                    <span :key="a"
                            :class="{'b': a==='Wengran Wang',
                          'small-subtitle': true}" v-text="a"></span>
                    <span :key="a" v-if="index<pub.AUTHOR.length-1">, </span>
                </template>
                    <br>
                    <span class="small-cardbody">{{pub.conferenceKey}}</span>
                    <i class="small-cardbody" v-if="pub.hasOwnProperty('rate')">({{pub.rate}})</i><br>

                <span class="small-cardbody">
                    <template   v-if="pub.hasOwnProperty('talk')" > <a :href="pub.talk">talk</a> | </template>
                    <template   v-if="pub.hasOwnProperty('slides')" > <a :href="pub.slides">slides</a> | </template>
                    <template   v-if="pub.hasOwnProperty('pdf')" > <a :href="pub.pdf">pdf</a> | </template>
                    <a :href=" 'pubs/bibs/' + pub.key + '.bib'">bib</a>
                </span><br>

                <v-row  v-if="pub.hasOwnProperty('abstractKey')" class="pt-1">
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
