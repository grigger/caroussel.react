<template>
    <div class="tesla-counter">
        <p class="tesla-counter__title">Speed</p>
        <div class="tesla-counter__container cf">
            <div class="tesla-counter__item"
                 tabindex="0"
                 @blur="onBlurSpeed"
                 @keydown="onKeyUpSpeed"
                 @focus="onFocusSpeed">
                <p class="tesla-counter__number">
                    {{speed.value}}
                    <span>kmh</span>
                </p>
                <div class="tesla-counter__controls"
                     tabindex="-1">
                    <button tabindex="-1"
                            type="button"
                            @click="incrementSpeed"
                            :disabled="speed.value === speed.max"></button>
                    <button tabindex="-1"
                            type="button"
                            @click="decrementSpeed"
                            :disabled="speed.value === speed.min"></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'tesla-counter-speed',
  props: {
    wheels: {
      type: Object,
      required: true,
    },
    speed: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onFocusSpeed(event) {
      this.speed.focused = false;
      event.preventDefault();
      event.stopPropagation();
    },
    onBlurSpeed(event) {
      this.speed.focused = true;
      event.preventDefault();
      event.stopPropagation();
    },
    onKeyUpSpeed(event) {
      let handlers = {
        ArrowDown: () => this.decrementSpeed(),
        ArrowUp: () => this.incrementSpeed(),
      };

      if (handlers[event.code]) {
        handlers[event.code]();
        event.preventDefault();
        event.stopPropagation();
      }
    },
    incrementSpeed() {
      if (this.speed.value < this.speed.max) {
        this.speed.value = this.speed.value + this.speed.step;
      }
    },
    decrementSpeed() {
      if (this.speed.value > this.speed.min) {
        this.speed.value = this.speed.value - this.speed.step;
      }
    },
  },
};
</script>
