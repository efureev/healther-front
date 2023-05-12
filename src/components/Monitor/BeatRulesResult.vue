<script setup lang="ts">
import type { EndpointCheck } from '@/store/monitors/EndpointCheck'

const { check } = defineProps<{
  check: EndpointCheck
}>()
</script>

<template>
  <div p5>
    <div font-bold>
      {{ check.status() }}
    </div>
    <div ml-2>
      <small>duration</small> {{ check.result.processing.duration.str }}
    </div>
    <h4 font-bold mt-3 mb-1>
      Rules
    </h4>
    <ul>
      <template v-if="check.result.processing.error !== ''">
        <li ml-2>
          <small>[FAILED] {{ check.result.processing.error }}</small>
        </li>
      </template>
      <template v-for="rule in check.result.rulesResult" :key="rule.rule.id">
        <li ml-2>
          <small>
            <template v-if="rule.error !== null">
              [{{ rule.error.type }}] <span font-bold>{{ rule.rule.id }}</span>: {{ rule.error.name }}
            </template>
            <template v-else>
              [OK] {{ rule.rule.id }}
            </template>
          </small>
        </li>
      </template>
    </ul>
  </div>
</template>
