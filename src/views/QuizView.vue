<script setup lang="ts">
import { ref, onMounted } from 'vue'
import QuestionComponent from '../components/QuestionComponent.vue'
import questionsService from '../services/questionsService.ts'
// import type { Question } from '../types.ts'

// const questions = ref({});
const question = ref()
const id = ref(1)

onMounted(() => {
  questionsService
    .getQuestion(id.value)
    .then((response) => {
      question.value = response.data
      console.console.log(question)
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<template>
  <div>
    <div>Displayed</div>
    <main v-if="question" class="quiz">
      <QuestionComponent :question="question" />
    </main>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
</style>
