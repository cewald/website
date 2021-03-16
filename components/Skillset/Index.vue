<template>
  <div>
    <h4>{{ title }}:</h4>
    <ul>
      <SkillsetSkill
        v-for="skill in skills"
        :key="skill">
        {{ skill }}
      </SkillsetSkill>
    </ul>
  </div>
  
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>
