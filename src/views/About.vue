<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-for="animal in animals" :key="animal.id">
      <span class="animalID">{{ animal.id }}</span> |
      <strong>{{ animal.name }}</strong>
      <b-icon icon="trash" class="ml-2" @click="deleteData(animal.id)" />
    </p>
    <input type="text" v-model="animalName" @keypress.enter="addData" />
    <button @click="addData">Add Data</button>
    <button @click="readData">Read Data</button>
    <button @click="printReverse">Reverse Nums</button>
  </div>
</template>

<script>
import db from "../firestore";
import reverse from "lodash-es/reverse";

let animalsRef = db.collection("animals");

export default {
  data() {
    return {
      animalName: "",
      animals: []
    };
  },
  methods: {
    addData() {
      animalsRef.add({
        name: this.animalName
      });
      this.animalName = "";
    },
    readData() {
      animalsRef.get().then(querySnap => {
        this.animals = [...querySnap.docs].map(doc => {
          let data = doc.data();
          data.id = doc.id;
          return data;
        });
      });
    },
    deleteData(id) {
      animalsRef.doc(id).delete();
    },
    printReverse() {
      let nums = [1, 2, 3];
      alert(reverse(nums));
    }
  }
};
</script>

<style lang="css" scoped>
.animalID {
  font-family: monospace;
}
</style>
