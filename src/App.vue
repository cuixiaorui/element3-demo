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

    <BaseView title="Avatar">
      <AvatarView></AvatarView>
    </BaseView>

    <BaseView title="tabs">
      <TabsView></TabsView>
    </BaseView>

    <BaseView title="pageHeader">
      <PageHeaderView></PageHeaderView>
    </BaseView>

    <BaseView title="drapdown">
      <DrapdownView></DrapdownView>
    </BaseView>

    <BaseView title="steps">
      <StepsView></StepsView>
    </BaseView>

    <BaseView title="message">
      <MessageView></MessageView>
    </BaseView>

    <BaseView title="loading ">
      <LoadingView></LoadingView>
    </BaseView>

    <BaseView title="messageBox">
      <MessageBoxView></MessageBoxView>
    </BaseView>

    <BaseView title="Nodification">
      <NotificationView></NotificationView>
    </BaseView>

    <BaseView title="dialog">
      <DialogView></DialogView>
    </BaseView>

    <BaseView title="tooltip">
      <TooltipView></TooltipView>
    </BaseView>

    <BaseView title="Popover">
      <PopoverView></PopoverView>
    </BaseView>

    <BaseView title="PopconfirmView">
      <PopconfirmView></PopconfirmView>
    </BaseView>

    <BaseView title="Card">
      <CardView></CardView>
    </BaseView>

    <BaseView title="Carousel">
      <!-- <CarouselView></CarouselView> -->
    </BaseView>

    <BaseView title="CollapseView">
      <CollapseView></CollapseView>
    </BaseView>

    <BaseView title="TimelineView">
      <TimelineView></TimelineView>
    </BaseView>

    <BaseView title="DividerView">
      <DividerView></DividerView>
    </BaseView>

    <BaseView title="CalendarView">
      <CalendarView></CalendarView>
    </BaseView>

    <BaseView title="ImageView">
      <ImageView></ImageView>
    </BaseView>

    <!-- <BaseView title="Backtop">
      <Backtop></Backtop>
    </BaseView>

    <BaseView title="InfiniteScrollView">
      <InfiniteScrollView></InfiniteScrollView>
    </BaseView> -->

    <BaseView title="DrawerView">
      <DrawerView></DrawerView>
    </BaseView>

    <BaseView title="Form">
      <FormView></FormView>
    </BaseView>
  </div>
</template>

<script>
import DrawerView from "./components/DrawerView";
import InfiniteScrollView from "./components/InfiniteScrollView";
import Backtop from "./components/Backtop";
import CalendarView from "./components/CalendarView";
import DividerView from "./components/DividerView";
import TimelineView from "./components/TimelineView";
import CollapseView from "./components/CollapseView";
import CarouselView from "./components/CarouselView";
import CardView from "./components/CardView";
import PopoverView from "./components/PopoverView";
import TooltipView from "./components/TooltipView";
import MessageBoxView from "./components/MessageBoxView";
import LoadingView from "./components/LoadingView";
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
import TabsView from "./components/TabsView";
import PageHeaderView from "./components/PageHeaderView";
import DrapdownView from "./components/DrapdownView";
import StepsView from "./components/StepsView";
import MessageView from "./components/MessageView";
import NotificationView from "./components/NotificationView";
import DialogView from "./components/DialogView";
import PopconfirmView from "./components/PopconfirmView";
import ImageView from "./components/ImageView";
import FormView from "./components/FormView";

export default {
  name: "App",
  components: {
    DrawerView,
    InfiniteScrollView,
    Backtop,
    ImageView,
    CalendarView,
    DividerView,
    TimelineView,
    CollapseView,
    CarouselView,
    CardView,
    PopconfirmView,
    PopoverView,
    TooltipView,
    DialogView,
    NotificationView,
    MessageBoxView,
    LoadingView,
    MessageView,
    StepsView,
    DrapdownView,
    PageHeaderView,
    TabsView,
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
    FormView,
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
