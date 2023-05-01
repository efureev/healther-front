<script setup lang="ts">
const isActive = ref(false)
</script>

<template>
  <el-row
    class="table-header"
    justify="space-between"
    align="middle"
  >
    <h3>Логи</h3>
  </el-row>
  <div class="index">
    <el-switch
      v-model="isActive"
      active-color="#13ce66"
      inactive-color="#ff4949"
    />
  </div>
</template>
