<script setup>
import { toRefs } from "vue";
const props = defineProps(['propsCourse'])

const { id, previewImageLink, title, rating, lessonsCount, meta: { skills, slug } } = toRefs(props.propsCourse)
</script>

<template>
    <div class="card shadow-sm">
        <img :src="previewImageLink + '/cover.webp'" alt="">
        <!-- <img src="https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-2/lesson-2.webp" alt=""> -->
        <!-- <img src="https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/cover.webp" alt=""> -->
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">{{ lessonsCount }} lessons</small>
                <small class="text-muted">Rating: {{ rating }}</small>
            </div>
            <h2 class="display-7 card-text my-3">{{ title }}</h2>
            <p class="h5">Skills</p>
            <ul class="d-flex flex-wrap ps-0">
                <li v-for="skill in skills" class="list-group-item" :key="skill">
                    <span class="badge rounded-pill text-bg-dark">{{ skill }}</span>
                </li>
            </ul>
            <a :href="`/core/preview-courses/${id}`" class="btn btn-primary" :title="slug">More about course</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.display-7 {
    font-size: 1.5rem;
    font-weight: 300;
}
</style>