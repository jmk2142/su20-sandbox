<template lang="html">
  <div class="container">
    <b-jumbotron :header="me" lead="A comparison of Todos"></b-jumbotron>
    <div class="row">
      <div class="col-6 offset-3 my-3">
        <input
          type="text"
          class="form-control my-3"
          placeholder="Todo task..."
          v-model="todo.task"
          @keypress.enter="addTodo"
        />
        <label>
          <input type="radio" name="done" :value="true" v-model="todo.done" />
          Done
        </label>
        <label class="mx-3">
          <input type="radio" name="done" :value="false" v-model="todo.done" />
          Pending
        </label>
        <button class="btn btn-primary" @click="addTodo">Add</button>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <TodosVanilla :me="me" />
      </div>
      <div class="col-6">
        <TodosVuefire :me="me" />
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firestore";
import TodosVanilla from "@/components/Todos.Vanilla";
import TodosVuefire from "@/components/Todos.Vuefire";

let todosRef = db.collection("todos");

export default {
  name: "TodoCompare",
  components: {
    TodosVanilla,
    TodosVuefire
  },
  data() {
    return {
      me: "Jin",
      todo: {
        // Vanilla, tuck id in technique
        // id: todosRef.doc().id,
        // No need with Vuefire
        task: "",
        done: false
      }
    };
  },
  methods: {
    addTodo() {
      // Vanilla - do this to tuck id into document
      // todosRef.doc(this.todo.id).set(this.todo);

      // Vuefire - no need to tuck id into document
      // We can just do add()
      todosRef.add(this.todo);

      this.resetTodo();
    },
    resetTodo() {
      this.todo = {
        // Vanilla - part of tucking id into document technique
        // id: todosRef.doc().id,
        task: "",
        done: false
      };
    }
  }
};
</script>

<style lang="css" scoped></style>
