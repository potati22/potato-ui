<template>
  <button
    :class="` py-${size[props.size].y}
          px-${size[props.size].x}
          ${props.round ? 'rounded-full' : 'rounded-lg'}
          bg-${props.color}-${props.plain ? '100' : '500'}
          hover:bg-${props.color}-400
          border-${props.color}-${props.plain ? '500' : '500'}
          cursor-pointer
          border-solid
          text-${props.plain ? props.color + '-500' : 'white-500'}
          text-${size[props.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          mx-1`"
  >
    <i v-if="props.icon" :class="`i-ic-baseline-${props.icon} p-3`"></i>
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
type ISize = 'small' | 'medium' | 'large'
type IColor =
  | 'black'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
const size = {
  small: {
    x: '2',
    y: '1',
    text: 'sm',
  },
  medium: {
    x: '3',
    y: '1.5',
    text: 'base',
  },
  large: {
    x: '4',
    y: '2',
    text: 'lg',
  },
}
const props = defineProps({
  size: {
    type: String as PropType<ISize>,
    default: 'medium',
  },
  color: {
    type: String as PropType<IColor>,
    default: 'blue',
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
})
</script>
