<script setup lang="ts"></script>

<template>
  <WithNavbar>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </WithNavbar>
</template>
