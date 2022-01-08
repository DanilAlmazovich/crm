<template>
  <layout>
    <div class="py-8 px-8">
      <div class="flex flex-wrap">
        <div class="w-1/2 mb-8">
          <vue3-chart-js type="bar" :data="data" />
        </div>
        <div class="w-1/2 mb-8">
          <vue3-chart-js type="line" :data="data" />
        </div>
        <div class="w-1/2 mb-8">
          <vue3-chart-js type="radar" :data="data" />
        </div>
        <div class="w-1/2 mb-8">
          <vue3-chart-js type="doughnut" :data="data" />
        </div>
        <div class="w-1/2 mb-8">
          <vue3-chart-js type="pie" :data="data" />
        </div>
        <div class="w-1/2 mb-8">
          <vue3-chart-js type="polarArea" :data="data" />
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
export default {
  components: {
    Vue3ChartJs,
  },
  name: "",
  data() {
    return {
      data: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [40, 20, 80, 10],
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss"></style>
