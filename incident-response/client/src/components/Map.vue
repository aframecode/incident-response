<template>
  <v-container :fluid="true" >
    <p>Map goes here {{ test }} </p>
  </v-container>
</template>

<script>
import { join } from 'lodash';
export default {
  name: "Map",

  data: () => ({
    test: join([1,2,3,5],',')
  })
};
</script>
