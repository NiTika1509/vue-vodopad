<template>
  <div>
    {{ rooms }}
  </div>
</template>

<script>
export default {
  name: "RoomsView",
  props:{
    rooms:{
      type: Object
    }
  }
}
</script>
