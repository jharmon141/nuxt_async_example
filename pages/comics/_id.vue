<template>
  <div class="container">
    <h1>{{ series.name }}</h1>
    <description :series="series"></description>
    <p><nuxt-link to="/posts">Back to the list</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'
import description from './description.vue'

export default {
  async asyncData ({ params }) {
    // We can use async/await ES6 feature
    let { data } = await axios.get(`https://comicvine.gamespot.com/api/issues/?api_key=bbef359c016ca8feb10fdfd96f3a3ea542633b3e&filter=id:${params.id}&format=json`)
    return { series: data.results[0]}
  },

    components: {
        'description': description
    },

  head () {
    return {
      title: this.series.name
    }
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  border: 1px #ddd solid;
  padding: 20px;
  text-align: left;
}
ul li a {
  color: gray;
}
p {
  font-size: 20px;
}
a {
  color: #41B883;
}
</style>
