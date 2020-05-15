<template>
    <nav elevate-on-scroll scroll-target="#scrolling-techniques-7">
        <v-toolbar  flat dense>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title class="amber--text darken-3font-weight-thin">words Of world</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-text-field class="searchBox" hide-details prepend-icon="search" single-line style="height: 40px; width: 0px;"></v-text-field>

            <v-btn text class="white">
                <v-icon right>exit_to_app</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>
    </nav>
</template>


<script>
export default {

}
</script>

<style>
.searchBox input{
    width: 20px;
    width: 20px;
    padding: 0;
    color: rgb(140, 147, 153);
}

</style>