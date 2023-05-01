<script setup lang="ts">
import { themeColor } from '@/store'

const style = computed<any>(() => ({
  '--theme-color': themeColor.value,
}))
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden bg-base" :style="style">
    <div class="h-full flex-auto overflow-overlay">
      <RouterView />
    </div>
    <Progress />
  </div>

  <!--
    <el-container>
      &lt;!&ndash;    <AlertManagerView /> &ndash;&gt;
      <el-header>
        &lt;!&ndash;      <head-menu /> &ndash;&gt;
      </el-header>
      <router-view />
      <el-footer>
        <CommonFooter />
      </el-footer>
    </el-container> -->

  <!--
    <nav>
      <router-link :to="{ name: 'index' }">
        Go to Home
      </router-link>
      <router-link :to="{ name: 'user' }">
        Go to User
      </router-link>
    </nav>
    -->
  <!--  <hr>
    <div class="container pt-12px pb-12px">
      <router-view v-slot="{ Component }">
        <Suspense>
          <component :is="Component" />
        </Suspense>
      </router-view>
    </div> -->
</template>
