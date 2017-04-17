<template>
  <div class="container">
    <h1>Comics</h1>
    <ul>
      <li v-for="series in series_list">
        <nuxt-link :to="{ name: 'comics-id', params: { id: series.id } }">{{ series.name }}</nuxt-link>
      </li>
    </ul>
    <p><nuxt-link to="/">Back to home page</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    asyncData ({ req, params }) {
        // We can return a Promise instead of calling the callback
        return axios.get('https://crossorigin.me/https://comicvine.gamespot.com/api/issues/?api_key=bbef359c016ca8feb10fdfd96f3a3ea542633b3e&filter=name:batman&sort=store_date:desc&format=json')
            .then((res) => {
                return { series_list: res.data.results.slice(0, 50) }
            })
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
