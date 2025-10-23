<script setup>
defineProps(['characters']);
</script>
<template>
  <div class="columns is-multiline">
    <div class="column is-3" v-for="character in characters">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{ character.name }}</p>
        </header>
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="character.image" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="content"></div>
          <table class="table is-striped is-hoverable is-fullwidth">
            <tbody>
              <tr>
                <th>Status</th>
                <td>{{ character.status }}</td>
              </tr>
              <tr>
                <th>Species</th>
                <td>{{ character.species }}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{{ character.gender }}</td>
              </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
