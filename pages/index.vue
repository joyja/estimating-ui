<template>
  <div>
    <div>{{ info }}</div>
    <div>{{ count }}</div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data () {
    return {
      count: 0,
    }
  },
  apollo: {
    info: gql` query {
      info
    }`,
    $subscribe: {
      counter: {
        query: gql` subscription {
          counter {
            count
          }
        }`,
        result ({ data: { counter : { count }} }) {
          this.count = count
        }
      },
    }
  }
}
</script>
