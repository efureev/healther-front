<template>
  <div class="flex h-screen flex-col overflow-hidden">
    <header class="dragging">
      <Navbar />
    </header>
    <main class="flex-auto overflow-overlay flex flex-col">
      <slot />
    </main>
    <footer style="flex: 1 1 auto">
      <CommonFooter />
    </footer>
  </div>
</template>
