<template>
<v-app>
      <navbar></navbar>
      <signin></signin>
  </v-app>
</template>

<script>
import navbar from './components/navbar';
import signin from './components/signin'

export default {
  name: 'App',

  components: {
    navbar,
    signin
  },

  data: () => ({
    //
  }),
};
</script>
