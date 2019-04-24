<template>
  <div class="about">
    <h1>This is an about page</h1>
    <todo-list></todo-list>
    <base-button></base-button>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  name: 'About',
  components: {
    TodoList,
  },
}
</script>
