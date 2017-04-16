<template>
    <div>
        <div><img :src="seriesImg"/></div>
        <div>{{series.store_date}}</div>
        <div v-html="series.description"></div>
    </div>
</template>

<script>

export default {

    props: {
        series: {},
    },

    computed: {
        seriesImg: function() {
            return this.series.image.small_url
        }
    }
}

</script>

