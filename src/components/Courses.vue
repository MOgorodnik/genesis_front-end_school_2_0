<script setup>
import { onMounted, ref, watchEffect } from "vue";
import CardOfCoursesList from '../components/CardOfCoursesList .vue'
import Pagination from '../components/Pagination.vue'

const API_URL = "https://api.wisey.app/api/v1/core/preview-courses"

const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
const body = 'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0'
const signature = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM'
const token = [header, body, signature].join('.')

// GET request using fetch with set headers
const headers = {
    'Authorization': `Bearer ${token}`,
};

const courses = ref(null)

onMounted(async () => {
    // watchEffect(async () => {
    // // this effect will run immediately and then
    // // re-run whenever currentBranch.value changes
    const url = `${API_URL}`
    try {
        const data = await (await fetch(url, { headers })).json()
        courses.value = data.courses
    } catch (error) {
        console.log('Error content fetch onMount', error);
    }
})
</script>

<template>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
                <div v-for="course in courses" :key="course.id" class="col">
                    <CardOfCoursesList :props-course="course" />
                </div>
            </div>

            <Pagination />
        </div>
    </div>
</template>