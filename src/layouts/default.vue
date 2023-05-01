<script setup lang="ts"></script>

<template>
  <WithNavbar>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <!--    -->
    <!--    <el-main> -->
    <!--      <div class="px-4 py-10 text-center text-gray-700 dark:text-gray-200"> -->
    <!--        <div class="container pt-12px pb-12px"> -->
    <!--          -->
    <!--        </div> -->
    <!--      </div>
     </el-main> -->
  </WithNavbar>
</template>
