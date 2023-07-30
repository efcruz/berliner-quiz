<script setup lang="ts">
import type { PropType, onMounted } from 'vue'
import type { Question } from '../types.ts'

defineProps<{
  question: {
    type: PropType<Question>
    required: true
  }
}>()
</script>

<template>
  <div class="question">
    <h2>{{ question.id }}.{{ question.title }}</h2>
    <div class="options">
      <input type="checkbox" id="optionOne" name="optionOne" />
      <label for="optionOne">{{ question.options[0].title }}</label>
      <br />
      <input type="checkbox" id="optionTwo" name="optionTwo" />
      <label for="optionTwo">{{ question.options[1].title }}</label>
      <br />
      <input type="checkbox" id="optionThree" name="optionThree" />
      <label for="optionThree">{{ question.options[2].title }}</label>
    </div>
    <input type="submit" value="Next question" />
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
