<template>
  <div class="error-container">
    <ErrorMessage v-for="msg of messages" :life="5000" :sticky="false" :severity="msg.severity" :key="msg.content">{{ msg.content }}</ErrorMessage>
  </div>
</template>

<script>

import errorMessage from "@/notifications/error.message";
const errorList = errorMessage;

export default {
  name: "ErrorHandler",
  data(){
    return {
      messages: [],
    }
  },
  computed: {
    error(){
      return this.$store.getters.error;
    }
  },
  watch:{
    error(e){
      this.messages.push(errorList[e] || 'Default');
    }
  },
}
</script>

<style lang="sass" scoped>
.error-container
  position: fixed !important
  right: 30px

</style>