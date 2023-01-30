<template>
  <div class="question">
   <h2>This is the first question</h2>
   <div class="options">
      <input type="checkbox" id="optionOne" name="optionOne">
      <label for="optionOne">This is option One</label>

      <input type="checkbox" id="optionTwo" name="optionTwo">
      <label for="optionTwo">This is option Two</label>
    </div>
    <input type="submit" value="Next" />
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