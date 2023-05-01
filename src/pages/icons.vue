<script setup lang="ts"></script>

<template>
  <!--  <div p="4" h="50" flex="1" scrollbar="~ rounded"> -->
  <!--    <div h="200"> -->
  <!--      rounded scrollbar rounded scrollbar rounded scrollbar rounded scrollbar -->
  <!--    </div> -->
  <!--  </div> -->
  <div>
    <h3>Buttons</h3>
    <div>
      <div>
        <p>button</p>
        <button class="i-carbon-sun dark:i-carbon-moon" />
      </div>
      <div>
        <p>el-button</p>
        <el-button>
          <div class="i-carbon-sun dark:i-carbon-moon" />
        </el-button>
      </div>
    </div>

    <h3>Icons from resolver</h3>
    <div>
      <icon-carbon-home />
      <icon-carbon-campsite />
      <icon-carbon-warning />
    </div>

    <h3>Icons from CSS (tagify)</h3>
    <div>
      <div i-carbon-home />
      <div i-carbon-campsite />
      <div i-carbon-warning />
    </div>

    <h3>Icons from CSS (class)</h3>
    <div>
      <div class="i-carbon-home" />
      <div class="i-carbon-campsite" />
      <div class="i-carbon-warning" />
    </div>
  </div>
</template>
