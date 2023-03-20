<template>
    <!-- <Courses /> -->
    <div>
        <h1>
            Single Course from views
        </h1>
        <h2>{{ $route.params.id }}</h2>
        <pre>
            {{course}}
        </pre>
    </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    }
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        console.log(444, this.$route.params);
        // this.fetchData()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
    fetchData() {
      this.error = this.post = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    },
  },
}

</script> -->

<script setup>
import { onMounted, ref, watch, computed } from "vue";
import { useRouter, useRoute } from 'vue-router'

const API_URL = "https://api.wisey.app/api/v1/core/preview-courses"

const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
const body = 'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0'
const signature = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM'
const token = [header, body, signature].join('.')

// GET request using fetch with set headers
const headers = {
    'Authorization': `Bearer ${token}`,
};

const route = useRoute()

const loading = ref(false)
const course = ref(null)
const error = ref(null)

onMounted(async () => {
    const url = `${API_URL}/${route.params.id}`
    console.log(url);
    try {
        course.value = await (await fetch(url, { headers })).json()
    } catch (error) {
        console.log('Error content fetch onMount', error);
    }
})
</script>
