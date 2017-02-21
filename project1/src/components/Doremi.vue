<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>

import MyButton from './MyButton'

export default {
  name: 'doremi',
  data () {
    return {
      msg: 'This is project 2 Doremi'
    }
  },
  components: {
    'my-button': MyButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
