
<template>
  <div class="portfolio-box">
    <h1 class="text-4x1">My Portfolio</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="Array.isArray(repositories) && repositories.length > 0">
      <li v-for="repo in repositories" :key="repo.id">
        <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
        <p><strong>Created On: </strong>{{ new Date(repo.created_at).toLocaleDateString() }}</p>
        <p><strong>{{ repo.description }}</strong></p>
        <p><strong>Language Type: </strong>{{ repo.language }}</p>
        <p><strong>Last updated: </strong>{{ new Date(repo.updated_at).toLocaleDateString() }}</p>
      </li>
    </ul>
  </div>
  <router-view/>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      repositories: [],
      loading: true,
      error: null,
    };
  },
  async created() {
    try {
      const response = await axios.get('https://api.github.com/users/PinedaE11658/repos');
      this.repositories = response.data;
    } catch (error) {
      this.error = 'Failed to load repositories';
    } finally {
      this.loading = false;
    }
  },
};
</script>


<style scoped>
.portfolio-box {
  background-color: #daeaf6;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 25px 9px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
}
.portfolio-box ul {
  list-style-type: none;
  padding: 0;
}

.portfolio-box li {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}
</style>