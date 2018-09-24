<template>
  <form class="tesla-battery">
    <h1>{{ title }}</h1>

    <!-- TeslaCarComponent -->
    <tesla-car :wheels="wheels.value"
               :speed="speed.value" />
    <!-- End TeslaCarComponent -->

    <!-- TeslaStatsComponent -->
    <div class="tesla-stats">
      <ul>
        <li v-for="stat in stats" v-bind:key="stat.model">
          <div :class="'tesla-stats-icon tesla-stats-icon--'+stat.model.toLowerCase()"></div>
          <p>{{ stat.miles }}
            <span>MI</span>
          </p>
        </li>
      </ul>
    </div>
    <!-- EndTeslaStatsComponent -->

    <div class="tesla-controls cf">

      <!-- TeslaCounterComponent for speed -->
      <tesla-counter-speed
          :speed="speed"
          :wheels="wheels"
      ></tesla-counter-speed>
      <!-- End TeslaCounterComponent for speed -->

      <div class="tesla-climate cf">

        <!-- TeslaCounterComponent for outside temperature -->
        <tesla-counter-temperature
              :temperature="temperature"
        ></tesla-counter-temperature>
        <!-- End TeslaCounterComponent for outside temperature -->

        <!-- TeslaClimateComponent -->
        <tesla-climate
              :temperature="temperature"
              :climate="climate"
        ></tesla-climate>
        <!-- End TeslaClimateComponent -->

      </div>

      <!-- TeslaWheelsComponent -->
      <tesla-wheel
              :wheels="wheels"
      ></tesla-wheel>

      <!-- End TeslaWheelsComponent -->

    </div>
    <div class="tesla-battery__notice">
      <p>
        The actual amount of range that you experience will vary based on your particular use conditions. See how particular use conditions may affect your range in our simulation model.
      </p>
      <p>
        Vehicle range may vary depending on the vehicle configuration, battery age and condition, driving style and operating, environmental and climate conditions.
      </p>
    </div>
  </form>
</template>

<script>
import TeslaCar from './components/tesla-car.component';
import TeslaCounterSpeed from './components/tesla-counter-speed.component.vue';
import TeslaCounterTemperature from './components/tesla-counter-temperature.component.vue';
import TeslaClimate from './components/tesla-climate.component.vue';
import TeslaWheel from './components/tesla-wheel.component.vue';

import teslaService from './tesla-battery.service';

export default {
  name: 'tesla-battery',
  components: {
    TeslaCar,
    TeslaCounterSpeed,
    TeslaCounterTemperature,
    TeslaClimate,
    TeslaWheel,
  },
  created() {
    this.metrics = teslaService.getModelData();
  },
  data() {
    return {
      title: 'Ranger Per Charge',
      models: ['60', '60D', '75', '75D', '90D', 'P100D'],
      wheels: {
        sizes: [19, 21],
        value: 19,
        focused: null,
      },
      climate: {
        value: true,
        focused: false,
      },
      temperature: {
        value: 20,
        focused: false,
        min: -10,
        max: 40,
        step: 10,
      },
      speed: {
        value: 55,
        focused: false,
        min: 45,
        max: 70,
        step: 5,
      },
      metrics: [],
    };
  },
  computed: {
    stats() {
      return this.models.map(model => {
        const miles = this.metrics[model][this.wheels.value][
          this.climate.value ? 'on' : 'off'
        ].speed[this.speed.value][this.temperature.value];
        return {
          model,
          miles,
        };
      });
    },
  },
  methods: {},
  filters: {
    lowercase(value) {
      return !value ? '' : value.toLowerCase();
    },
  },
};
</script>
