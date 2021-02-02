<style>
  body{
    /*font-family: Lato,serif;*/
    font-weight: 300;
    color: #0e0e0e;
  }
  .b{
    font-weight: 400;
  }
  a:link {
    text-decoration: none;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    color:#0e0e0e
  }
  .small-title{
    font-size: 15px;
    font-weight: 400;
  }
  .small-subtitle{
    font-size: 13px;
    color:#0e0e0e

  }
  .small-cardbody{
    font-size: 13px;
    color:#0e0e0e;
  }
  span {
    line-height:1 !important
  }



</style>

<template>
  <v-app
         id="app">
    <v-main>
      <v-container   style="max-width: 45rem">
        <v-row justify="center" align="center" class="py-16">
        <h1 style="color:#616161; font-family: 'Courgette', cursive; font-size: 1.8rem">Emma (Wengran) Wang</h1>
        </v-row>
<!--        <v-divider></v-divider>-->
<!--        <template v-slot:extension>-->
          <v-tabs background-color="grey lighten-5" v-model="tab">
            <v-tabs-slider color="grey lighten-2"></v-tabs-slider>
            <v-tab href='#research'>
              Bio & Research
            </v-tab>
            <v-tab-item value="research">
              <research></research>
            </v-tab-item>
            <v-tab href="#publications">
              Publications
            </v-tab>
            <v-tab-item  value="publications">
              <publications></publications>
            </v-tab-item>
            <v-tab href="#interests">
                Interests
              </v-tab>
              <v-tab-item  value="interests">
                <interests></interests>
            </v-tab-item>
          </v-tabs>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import research from './components/research';
import publications from './components/publications';
import interests from './components/interests';

export default {
  name: 'App',

  components: {
    // eslint-disable-next-line vue/no-unused-components
    research,
    publications,
    interests
  },

  data: () => ({
      tab: null
  }),
};
</script>
