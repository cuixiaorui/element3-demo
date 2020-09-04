<template>
  <div id="app">
    <div>
      <p>button</p>
      <ButtonView></ButtonView>
    </div>
    <hr />
    <div>
      <p>switch</p>
      <SwitchView></SwitchView>
    </div>
  </div>
</template>

<script>
import ButtonView from "./components/ButtonView";
import SwitchView from "./components/SwitchView";

export default {
  name: "App",
  components: {
    ButtonView,
    SwitchView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
