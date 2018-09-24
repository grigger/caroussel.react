<template>
    <div class="tesla-wheels">
        <p class="tesla-wheels__title">Wheels</p>
        <div class="tesla-wheels__container cf">
            <label v-for="size in wheels.sizes"
                   :key="size"
                   :class="[{'tesla-wheels__item--active' : (wheels.value === size), 'tesla-wheels__item--focused': (wheels.focused === size),'tesla-wheels__item': true}, `tesla-wheels__item--${size}`]">
                <input type="radio"
                       name="wheelsize"
                       :value="size"
                       @blur="onBlurWheels"
                       @click="changeWheelSize(size)"
                       @focus="onFocusWheels(size)"
                       :checked="wheels.value === size">
                <p>
                    {{size}}"
                </p>
            </label>
        </div>
    </div>
</template>

<script>
export default {
  name: 'tesla-wheel',
  props: {
    wheels: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeWheelSize(size) {
      this.wheels.value = size;
    },
    onBlurWheels() {
      this.wheels.focused = false;
    },
    onFocusWheels(size) {
      this.wheels.focused = size;
    },
  },
};
</script>
