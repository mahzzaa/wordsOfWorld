<template>
    <nav elevate-on-scroll scroll-target="#scrolling-techniques-7">
        <v-toolbar  flat dense>
            <v-app-bar-nav-icon app class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="light-green--text lighten-1 darken-3font-weight-thin">کلمه های جهان</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn  color="white">
              <span>sing out</span>
              <v-icon right>exit_to_app</v-icon>
          </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer absolute temporary  v-model="drawer"  class="cyan accent-1">
            <v-layout column align-center>
                <v-flex class="my-5">
                    <v-avatar size="100" class="grey lighten-2">
                   <img src="/female.svg">
                 </v-avatar>
                 <p class="white--text subheading mt-1">
                     پروفایل
                 </p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <popUp @projectAdded="snackbar = true"/>
                </v-flex>
            </v-layout>   
            <!-- <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content >
                        <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list> -->
        </v-navigation-drawer>
    </nav>
</template>


<script>
import popUp from './popUp'
export default {
    components:{popUp},
    data(){
        return{
            drawer:false
        }
    }
}
</script>

<style>

</style>