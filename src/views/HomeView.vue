<template>
  <NpmPackages/>
</template>

<script>
import { defineComponent } from 'vue';

import NpmPackages from '../components/NpmPackages.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NpmPackages,
  },
});
</script>
