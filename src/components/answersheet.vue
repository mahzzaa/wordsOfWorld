<template>
 <div>
    <v-col>
        <v-img src="@/assets/mobiletest.svg" aspect-ratio="1" max-width="50%" max-height="20%"></v-img>
        <v-row justify="center">
            <v-col cols="12" sm="10" md="8" lg="6">
                <v-card class="mx-auto" max-width="500" style="right:0% ,left:70%">
                    <v-card-text>
                        <v-progress-linear v-model="skill" color="amber darken-3" height="25" reactive>
                            <template v-slot="{ value }">
                                <strong>{{ Math.ceil(value) }}%</strong>
                            </template>
                        </v-progress-linear>

                        <p class="display-1 text--primary">
                            be•nev•o•lent
                        </p>
                        <p>adjective</p>
                        <div class="text--primary">
                            well meaning and kindly.<br />
                            "a benevolent smile"
                        </div>
                        <v-checkbox v-model="ex4" label="orange" color="orange" value="orange" hide-details></v-checkbox>
                        <v-checkbox v-model="ex4" label="orange" color="orange" value="orange" hide-details></v-checkbox>
                        <v-checkbox v-model="ex4" label="orange" color="orange" value="orange" hide-details></v-checkbox>
                        <v-checkbox v-model="ex4" label="orange" color="orange" value="orange" hide-details></v-checkbox>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text right="100" color="deep-purple accent-4">
                            next
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</div>

</template>

<script>
export default {
 data () {
      return {
           skill: 20,
      knowledge: 33,
      power: 78,
        ex4: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
      }
    },
}
</script>

<style>

</style>