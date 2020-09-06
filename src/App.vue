<template>
  <div id="app">
    <BaseView title="Button">
      <ButtonView></ButtonView>
    </BaseView>

    <BaseView title="Switch">
      <SwitchView></SwitchView>
    </BaseView>

    <BaseView title="Progress">
      <ProgressView></ProgressView>
    </BaseView>

    <BaseView title="Link">
      <LinkView></LinkView>
    </BaseView>
  </div>
</template>

<script>
import BaseView from "./components/BaseView";
import ButtonView from "./components/ButtonView";
import SwitchView from "./components/SwitchView";
import ProgressView from "./components/ProgressView";
import LinkView from "./components/LinkView";

export default {
  name: "App",
  components: {
    BaseView,
    ButtonView,
    SwitchView,
    ProgressView,
    LinkView,
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
