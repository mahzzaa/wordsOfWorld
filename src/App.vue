<template>
<v-app>
      <navbar></navbar>
      <answersheet></answersheet>
  </v-app>
</template>

<script>
import navbar from './components/navbar';
import answersheet from './components/answersheet'

export default {
  name: 'App',
  components: {
    navbar,
    answersheet
  },

  data: () => ({
    //
  }),
};
</script>
