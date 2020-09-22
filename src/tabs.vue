<template>
  <div class="tabs">
    <slot></slot>
    <slot name="action"></slot>
  </div>
</template>

<script>
export default {
  name: "GuluTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf >= 0;
      }
    }
  },
  created() {}
};
</script>

<style>
.tabs {
}
</style>