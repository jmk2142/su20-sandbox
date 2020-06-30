<template lang="html">
  <div>
    <!-- BOOTSTRAP-VUE -->
    <b-container fluid="xl">
      <b-jumbotron
        header="Framework Comparison"
        lead="Bootstrap-Vue vs. Vuetify"
      />

      <div class="pageFrame shadow my-5">
        <b-row>
          <b-col
            ><h1>
              Bootstrap-Vue<br />All still just a mess of a sandbox. Not
              intended as guide.
            </h1></b-col
          >
        </b-row>
        <b-row>
          <b-col>Column 1</b-col>
          <b-col>Column 2</b-col>
          <b-col>Column 3</b-col>
        </b-row>
      </div>
    </b-container>

    <!-- VUETIFY RESERVED -->
    <div class="pageFrame shadow">
      <VuetifyDemo />
    </div>
  </div>
</template>

<script>
import VuetifyDemo from "@/components/VuetifyDemo";

export default {
  name: "VisualCompare",
  components: {
    VuetifyDemo
  }
};
</script>

<style lang="css" scoped>
.pageFrame {
  background-color: #f6f6f6;
}
</style>
