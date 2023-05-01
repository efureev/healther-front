<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useI18n } from '@/i18n'

const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <el-main>
    <div class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
      <div>
        <p class="text-4xl">
          <icon-carbon-warning class="inline-block" />
        </p>
      </div>
      <router-view v-bind="$attrs" />
      <div>
        <el-button class="btn m-3 text-sm mt-8" @click="router.back()">
          {{ t('Back') }}
        </el-button>
      </div>
    </div>
  </el-main>
</template>
