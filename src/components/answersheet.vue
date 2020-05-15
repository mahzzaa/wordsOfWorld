<template>
<v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
        <v-card class="card" ref="form">
                <v-card-text>
                    <v-progress-linear class="line" v-model="skill" color="amber darken-3" height="20" reactive>
                        <template v-slot="{ value }">
                            <strong>{{ Math.ceil(value) }}%</strong>
                        </template>
                    </v-progress-linear>

                    
                    <p></p>
                    <div class="text--primary"  v-for="question in questions" :key="question.title">
                       <ul class="list">
                           <li>{{question.id}} .</li>
                           <li>  {{question.title}}</li>
                       </ul>
                    </div>
    
                    <div class="checkbox">
                        <v-checkbox label="orange" color="orange" value="orange" hide-details></v-checkbox>
                    <v-checkbox label="orange" color="orange" value="orange" hide-details></v-checkbox>
                    <v-checkbox label="orange" color="orange" value="orange" hide-details></v-checkbox>
                    <v-checkbox label="orange" color="orange" value="orange" hide-details></v-checkbox>
                    </div>

                </v-card-text>
                <v-card-actions class="action">
                    <v-btn text color="deep-purple accent-4">
                        next
                    </v-btn>
                </v-card-actions>
        </v-card>
    </v-col>
</v-row>


</template>

<script>
export default {
 data () {
      return {
           skill: 20,
           questions:[
               {title: "what's the meaning od book?" , id: '1'}
           ],
           id: '',
           answers:[]
         }
    },
    created(){
    }
}
</script>

<style>
.card{
    padding: 20px;
    margin: 20px;
}
.action{
    position: relative;
    left: 80%;
}

.line{
    border-radius: 10px;
}

.list{
    text-decoration: none;
    list-style: none;
    display: flex;
}
</style>