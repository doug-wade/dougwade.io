<template>
  <div>
    <h2>Some packages I'm a collaborator on and their downloads for the past year</h2>
    <div v-for="packageDatum in packageData" :key="packageDatum.package">
      <span>
        {{ packageDatum.package }}
      </span>
      <span>: </span>
      <span>
        {{ Intl.NumberFormat().format(packageDatum.downloads) }}
      </span>
    </div>
    <v-btn color="primary" @click="fetchPackages">
      Refresh packages
    </v-btn>
  </div>
</template>

<script>
import { PORTFOLIO_PACKAGES } from '../constants';

export default {
  name: 'NpmPackages',

  data() {
    return {
      packageData: []
    }
  },

  mounted() {
    this.fetchPackages();
  },

  methods: {
    async fetchPackages() {
      this.packageData = await Promise.all(PORTFOLIO_PACKAGES.map(async packageName => {
        const res = await fetch(`https://api.npmjs.org/downloads/point/last-year/${packageName}`);
        return await res.json();
      }));
    }
  }
}
</script>
