<template>
  <div class="lakes_container">
    <div class="lakes_content">
      <h1>Lakes</h1>
      <ul class="lakes_list">
        <li v-for="lake in lakes" :key="lake.id">
          <h2>{{ lake.name }}</h2>
          <p>{{ lake.country }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // lakes
      lakes: [""],
    };
  },
  methods: {
    async getData() {
      try {
        // fetch lakes
        const response = await this.$http.get(
          "http://localhost:8000/api/lakes/"
        );
        // set the data returned as lakes
        this.lakes = response.data;
      } catch (error) {
        // log the error
        console.log(error);
      }
    },
  },
  created() {
    // Fetch lakes on page load
    this.getData();
  },
};
</script>
