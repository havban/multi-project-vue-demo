<template>
<div>
  <div id="app">
    <button onclick="alert('my menu')">My Menu</button>
    <router-link to="/">Home</router-link>
    <router-link to="/hola" @click.native="goToHola">Hola</router-link>
    <button v-on:click="goToDoremi">Go to Doremi</button>
    <img src="./assets/logo.png">
    <router-view></router-view>

    <div id="doremi">
    </div>
    <div id="app2">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  created: function () {
//    let currentPath = this.$router.history.current.path
    this.goToHola()
  },
  methods: {
    goToDoremi: function () {
      // GET /someUrl
      this.$http.get('http://localhost:8080/static/p3.html').then(response => {
        // get body data
        let l = document.getElementsByTagName('script')
        for (let i in l) {
          console.log(l[i])
          if (l[i].remove) {
            // l[i].remove()
          }
        }
        let myNode = document.getElementById('doremi')
        while (myNode.firstChild) {
          myNode.removeChild(myNode.firstChild)
        }
        let scripts = response.body.split(',')
        for (let i in scripts) {
          let script = document.createElement('script')
          script.src = scripts[i]
          myNode.appendChild(script)
        }
      }, response => {
        // error callback
      })
    },
    goToHola: function () {
      // GET /someUrl
      this.$http.get('http://localhost:8080/static/p1.html').then(response => {
        // get body data
        let l = document.getElementsByTagName('script')
        for (let i in l) {
          console.log(l[i])
          if (l[i].remove) {
            // l[i].remove()
          }
        }
        let myNode = document.getElementById('doremi')
        while (myNode.firstChild) {
          myNode.removeChild(myNode.firstChild)
        }
        let scripts = response.body.split(',')
//        for (let i in scripts) {
//          let script = document.createElement('script')
//          script.src = scripts[i]
//          myNode.appendChild(script)
//        }
        let i = 0
        let self = this
        let getScriptSuccess = function () {
          if (i > scripts.length - 2) {
            return
          }
          i++
          self.getScript(scripts[i], getScriptSuccess)
        }
        this.getScript(scripts[0], getScriptSuccess)
      }, response => {
        // error callback
      })
    },
    getScript: function (url, success) {
      var head = document.getElementsByTagName('head')[0]
      var done = false
      var script = document.createElement('script')
      script.src = url
      // Attach handlers for all browsers
      script.onload = script.onreadystatechange = function () {
        if (!done && (!this.readyState ||
          this.readyState === 'loaded' || this.readyState === 'complete')) {
          done = true
          success()
        }
      }
      head.appendChild(script)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
