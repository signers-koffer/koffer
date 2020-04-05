<template>
  <div v-on-clickaway="handleEditEnd">
    <Moveable
      ref="moveable"
      v-bind="moveable"
      @drag="handleDrag"
      :class="[isEditing ? 'is-editing' : '']"
      class="Shape"
    >
      <button @click="deleteShape">
        <icon icon="close" size="small" />
      </button>
      <svg @click="handleEditStart" viewBox="0 0 100 100">
        <circle v-if="currentShape === 'circle'" cx="50" cy="50" r="40" />
        <path v-else-if="currentShape === 'triangle'" d="M4 96 H96 L50 4Z" />
        <path
          v-else-if="currentShape === 'rectangle'"
          d="M2 2 h96 v96 h-96 v-96"
        />
      </svg>
    </Moveable>
    <transition name="fade-fast">
      <div class="Context-menu">
        <div v-show="isEditing" class="context Context-menuInner">
          <shape-picker :value="shapeIndex" @input="handleUpdateShape" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// https://www.npmjs.com/package/vue-clickaway
import { mixin as clickaway } from 'vue-clickaway'

// https://vuejsexamples.com/a-vue-component-that-create-moveable-and-resizable/
import Moveable from 'vue-moveable'
import { SHAPES } from '~/store/shapes'
import ShapePicker from '~/components/board/ShapePicker.vue'
import Icon from '~/components/Icon'

export default {
  components: { Moveable, ShapePicker, Icon },
  mixins: [clickaway],
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    isEditing: false,
    shapeIndex: 0,
    shape: SHAPES[0],
    moveable: {
      draggable: true,
      throttleDrag: 0
    }
  }),
  computed: {
    currentShape() {
      return SHAPES[this.$data.shapeIndex]
    }
  },
  methods: {
    handleUpdateShape(shapeIndex) {
      this.$data.shapeIndex = shapeIndex
      const { uuid } = this.value
      const shape = this.currentShape
      this.$store.dispatch('shapes/updateShape', { uuid, shape })
    },
    handleEditStart() {
      this.$data.isEditing = true
      this.$emit('contextOpen')
    },
    handleEditEnd() {
      this.$data.isEditing = false
      this.$data.shape = this.currentShape
      this.$store.dispatch('shapes/updateShape', {
        uuid: this.value.uuid,
        shape: this.currentShape
      })
    },
    handleDrag({ target, top: y, left: x, transform }) {
      const { uuid } = this.value
      target.style.transform = transform
      this.$store.dispatch('shapes/updatePosition', { uuid, transform, x, y })
    },
    deleteShape(id) {
      this.$store.dispatch('shapes/delete', {
        uuid: this.value.uuid
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$size: 250px;
$button-size: 22px;

* {
  box-sizing: border-box;
}

.Shape {
  position: absolute;
  width: $size;
  height: $size;
  transition: box-shadow 300ms ease-in-out;
  filter: url('#dropshadow');

  &--inner {
    padding: 20px;
    height: 100%;
    background-color: #fefac7;
  }

  &.is-editing > svg > * {
    stroke: #3985f7;
  }

  rect,
  path,
  circle {
    fill: yellow;
    stroke: black;
    stroke-width: 3;
    fill: transparent;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    background: transparent;
    border: none;
    padding: 5px;
    width: $button-size;
    height: $button-size;
  }

  &:hover .icon,
  &:hover .icon > img {
    opacity: 1;
  }

  @at-root {
    .icon,
    .icon > img {
      display: inline-block;
      opacity: 0;
      transition: opacity 300ms ease-in-out;
    }
  }
}

.Context-menu {
  transform: translate(-50vw, -50vh);
}
.Context-menuInner {
  left: 50%;
  top: 24px;
  transform: translateX(-50%);
}
</style>