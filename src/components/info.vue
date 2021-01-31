<template>
    <v-container
            style="max-width: 45rem">
        <v-divider/>
        <v-row
                justify="center"
                align="center"
                class= "py-10"
                style="background-color: #fafafa"
        >
            <v-col cols="2"
            >
                <v-avatar
                        class="profile"
                        size="80%"
                >
                    <v-img
                            :src="imageSrc"
                    >
                    </v-img>
                </v-avatar>
            </v-col>
            <v-col cols="9" class="ma-2" >
                <slot name="body"></slot>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    export default {
        name: "info",
        props: ['imageSrc']
    }
</script>

<style scoped>

</style>
