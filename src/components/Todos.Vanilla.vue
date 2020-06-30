<template lang="html">
  <div class="todos">
    <h1>Vanilla version</h1>
    <select class="form-control mb-3" v-model="listType">
      <option value="all">ALL</option>
      <option value="onlyDone">Only Done</option>
      <option value="onlyPending">Only Pending</option>
    </select>
    <ul>
      <li
        class="todo"
        v-for="todo in todos"
        :key="todo.id"
        :class="{ done: todo.done }"
        @click="toggleDone(todo)"
      >
        <small>{{ todo.id || "ID !enumerable" }}</small> | {{ todo.task }}
      </li>
      <button class="btn btn-danger mt-3" @click="trashDone">
        Trash {{ doneCount }}
      </button>
    </ul>
  </div>
</template>

<script>
import db from "../firestore";

let todosRef = db.collection("todos");

export default {
  name: "TodosVanilla",
  props: ["me"],
  data() {
    return {
      listType: "all",
      todos: []
    };
  },
  watch: {
    listType(newVal) {
      this.stopListening();

      let query;

      if (newVal === "onlyDone") {
        query = todosRef.where("done", "==", true);
      } else if (newVal === "onlyPending") {
        query = todosRef.where("done", "==", false);
      } else {
        query = todosRef;
      }

      this.stopListening = query.onSnapshot(querySnap => {
        let docsData = [];
        querySnap.forEach(doc => {
          let data = doc.data();
          data.id = doc.id;
          docsData.push(data);
        });
        this.todos = docsData;
      });
    }
  },
  computed: {
    doneCount() {
      return this.todos.filter(todo => todo.done).length;
    }
  },
  methods: {
    toggleDone(todo) {
      todosRef.doc(todo.id).update({
        done: !todo.done
      });
    },
    trashDone() {
      let doneTodos = this.todos.filter(todo => todo.done);

      let batch = db.batch(); // Batched operation
      doneTodos.forEach(todo => {
        let todoRef = todosRef.doc(todo.id);
        batch.delete(todoRef);
      });
      batch.commit().then(() => {
        alert(`Deleted: ${doneTodos.length} todo in single operation.`);
      });
    }
  },
  mounted() {
    this.stopListening = todosRef.onSnapshot(querySnap => {
      // Vanilla - some data manipulation to get it into
      // a data form vs the pure document
      let docsData = [];
      querySnap.forEach(doc => {
        let data = doc.data();
        data.id = doc.id;
        docsData.push(data);
      });
      this.todos = docsData;
    });
  },
  destroyed() {
    this.stopListening();
  }
};
</script>

<style lang="scss" scoped>
.todo {
  cursor: pointer;
}
.todo:hover {
  background-color: gold;
}
.done {
  text-decoration: line-through;
  color: silver;
}
</style>
