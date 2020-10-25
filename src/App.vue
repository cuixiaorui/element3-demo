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

    <BaseView title="Pagination">
      <PaginationView></PaginationView>
    </BaseView>

    <BaseView title="Layout">
      <LayoutView></LayoutView>
    </BaseView>

    <BaseView title="Container">
      <ContainerView></ContainerView>
    </BaseView>

    <BaseView title="Tag">
      <TagView></TagView>
    </BaseView>

    <BaseView title="Badge">
      <BadgeView></BadgeView>
    </BaseView>

    <BaseView title="avatar">
      <AvatarView></AvatarView>
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
import PaginationView from "./components/PaginationView";
import LayoutView from "./components/LayoutView";
import ContainerView from "./components/ContainerView";
import TagView from "./components/TagView";
import BadgeView from "./components/BadgeView";
import AvatarView from "./components/AvatarView";

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
    PaginationView,
    LayoutView,
    ContainerView,
    TagView,
    BadgeView,
    AvatarView,
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
