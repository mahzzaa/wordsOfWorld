<template>
  <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text slot="activator" class="green accent-2"  v-on="on">Add New question</v-btn>
      </template>
       <v-card>
            <v-card-title primary-title>
                <h5 >Add a new question</h5>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="number" v-model="number" prepend-icon="format_list_numbered" ></v-text-field>
                    <v-text-field label="question" v-model="question" prepend-icon="help" :rules="inputRules"></v-text-field>
                    <v-text-field label="answer1" v-model="answer1" prepend-icon="chat_bubble_outline" ></v-text-field>
                    <v-text-field label="answer2" v-model="answer2" prepend-icon="chat_bubble_outline" ></v-text-field>
                    <v-text-field label="answer3" v-model="answer3" prepend-icon="chat_bubble_outline" ></v-text-field>
                    <v-text-field label="answer4" v-model="answer4" prepend-icon="chat_bubble_outline" ></v-text-field>
                    <v-text-field label="currect answer" v-model="correct_answer" prepend-icon="check" ></v-text-field>


                    <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading">Add question</v-btn>

                    
                </v-form>
            </v-card-text>
        </v-card>
        
  </v-dialog>
 
</template>

<script>
import db from '@/fb'

export default {
    data(){
        return{
            question:'',
            answer1:'',
            answer2:'',
            answer3:'',
            answer4:'',
            correct_answer:'',
            number:'',
             menu: false,
            modal: false,
            inputRules: [
                v => v.length >= 3 || 'Minimum lenght is 3 characters'
            ],
            loading: false,
            dialog: false
        }
    },
    methods:{
        submit(){
            if (this.$refs.form.validate()){
                this.loading = true;

                const answershet = {
                    question: this.question,
                    answer1: this.answer1,
                    answer2: this.answer2,
                    answer3: this.answer3,
                    answer4: this.answer4,
                    number:this.number,
                    correct_answer: this.correct_answer
                }

                db.collection('answersheet').add(answershet).then(()=>{
                    this.loading = false;
                    this.dialog = false;
                    this.$emit('questionAdded')
                })
            }
        }
    }
}
</script>

<style>

</style>