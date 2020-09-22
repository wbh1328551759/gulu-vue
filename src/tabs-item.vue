<template>
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluTabsItem",
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
        console.log(`pane ${this.name}被选中了`);
        this.active = true;
      } else {
        console.log(`pane ${this.name}没被选中`);
        this.active = false;
      }
    });
  },
  mounted() {
    console.log(this.name);
  },
  methods: {
    onClick() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  &.active {
    background: red;
  }
  &.disabled {
    cursor: not-allowed;
  }
}
</style>