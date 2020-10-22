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

    <BaseView title="Icon">
      <IconView></IconView>
    </BaseView>

    <BaseView title="Breadcrumb">
      <BreadcrumbView></BreadcrumbView>
    </BaseView>

    <BaseView title="Menu">
      <MenuView></MenuView>
    </BaseView>

    <BaseView title="Tree">
      <TreeView></TreeView>
    </BaseView>
  </div>
</template>

<script>
import BaseView from "./components/BaseView";
import ButtonView from "./components/ButtonView";
import SwitchView from "./components/SwitchView";
import ProgressView from "./components/ProgressView";
import LinkView from "./components/LinkView";
import IconView from "./components/IconView";
import BreadcrumbView from "./components/BreadcrumbView";
import MenuView from "./components/MenuView";
import TreeView from "./components/TreeView";

export default {
  name: "App",
  components: {
    BreadcrumbView,
    BaseView,
    ButtonView,
    SwitchView,
    ProgressView,
    LinkView,
    IconView,
    MenuView,
    TreeView,
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
