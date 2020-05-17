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
                    <div class="text--primary" v-for="answershet in answersheet" :key="answershet.id">
                      
                           <div>{{answershet.number}}.</div>
                           <div>{{answershet.question}}</div>
                      <div class="checkbox">
                        <v-checkbox :label="answershet.answer1" color="orange" value="answer1" hide-details></v-checkbox>
                        <v-checkbox :label="answershet.answer2" color="orange" value="answer2" hide-details></v-checkbox>
                        <v-checkbox :label="answershet.answer3" color="orange" value="answer3" hide-details></v-checkbox>
                        <v-checkbox :label="answershet.answer4" color="orange" value="answer4" hide-details></v-checkbox>
                    </div>
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
import db from '@/fb'

export default {
 data () {
      return {
           skill: 20,
           answersheet: [ ]
         }
    },
    created(){
        db.collection('answersheet').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change =>{
        if (change.type === 'added'){
          this.answersheet.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      });
    })
    // db.collection('answersheet').onSnapshot(res => {
    //   const changes = res.docChanges();
    //   console.log(changes[0].doc.data());
    //   changes.forEach(change =>{
    //     if (change.type === 'added'){
    //       this.projects.push({
    //         ...change.doc.data(),
    //         id: change.doc.id
    //       })
    //     }
    //   });
    // })
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