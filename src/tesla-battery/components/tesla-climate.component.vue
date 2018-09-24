<template>
  <div>
    <!-- the class tesla-heat must be added only if the limit is achieved -->
    <label class="tesla-climate__item"
           :class="{
                      'tesla-climate__item--active': climate.value,
                      'tesla-climate__item--focused': climate.focused === climate.value,
                      'tesla-heat': temperature.value < 20
                  }">
      <p class="heat">{{ (limitHeat ? 'ac' : 'heat') }} {{ climate.value ? 'on' : 'off' }}</p>
      <i class="tesla-climate__icon"></i>
      <input type="checkbox"
             name="climate"
             :checked="true"
             @click="changeClimate"
             @blur="onBlurClimate"
             @focus="onFocusClimate">
    </label>
  </div>
</template>

<script>
export default {
  name: 'tesla-climate',
  props: {
    temperature: {
      type: Object,
      required: true,
    },
    climate: {
      type: Object,
      required: true,
    },
  },
  computed: {
    limitHeat() {
      return this.temperature.value >= 10;
      // return boolean that is true if the temperature of the tesla is above 10 degrees
    },
  },
  methods: {
    changeClimate() {
      this.climate.value = !this.climate.value;
    },
    onBlurClimate() {
      this.climate.focused = false;
    },
    onFocusClimate() {
      this.climate.focused = true;
    },
  },
};
</script>
