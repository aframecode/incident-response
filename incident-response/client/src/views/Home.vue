<template>
  <div class="home">
    <p>Home</p>
    <Map/>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from "@/components/Map.vue";

export default {
  name: "Home",
  components: {
    Map
  }
};
</script>
