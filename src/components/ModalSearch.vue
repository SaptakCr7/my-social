<script setup></script>
<template>
  <form class="d-flex" role="search">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search For Freinds"
      aria-label="Search"
    />
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</template>
<style>
form {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
input {
  max-width: 300px;
}
</style>
