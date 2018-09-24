<template>
    <div class="tesla-counter">
        <p class="tesla-counter__title">Outside Temperature</p>
        <div class="tesla-counter__container cf">
            <div class="tesla-counter__item"
                 tabindex="0"
                 @blur="onBlurTemperature"
                 @keydown="onKeyUpTemperature"
                 @focus="onFocusTemperature">
                <p class="tesla-counter__number">
                    {{temperature.value}}
                    <span>°</span>
                </p>
                <div class="tesla-counter__controls"
                     tabindex="-1">
                    <button tabindex="-1"
                            type="button"
                            @click="incrementTemperature"
                            :disabled="temperature.value === temperature.max"></button>
                    <button tabindex="-1"
                            type="button"
                            @click="decrementTemperature"
                            :disabled="temperature.value === temperature.min"></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'tesla-counter-temperature',
  props: {
    temperature: {
      type: Object,
      required: true,
    },
  },
  methods: {
    incrementTemperature() {
      if (this.temperature.value < this.temperature.max) {
        this.temperature.value = this.temperature.value + this.temperature.step;
      }
    },
    decrementTemperature() {
      if (this.temperature.value > this.temperature.min) {
        this.temperature.value = this.temperature.value - this.temperature.step;
      }
    },
    onFocusTemperature(event) {
      this.temperature.focused = false;
      event.preventDefault();
      event.stopPropagation();
    },
    onBlurTemperature(event) {
      this.temperature.focused = true;
      event.preventDefault();
      event.stopPropagation();
    },
    onKeyUpTemperature(event) {
      let handlers = {
        ArrowDown: () => this.decrementTemperature(),
        ArrowUp: () => this.incrementTemperature(),
      };

      if (handlers[event.code]) {
        handlers[event.code]();
        event.preventDefault();
        event.stopPropagation();
      }
    },
  },
};
</script>
