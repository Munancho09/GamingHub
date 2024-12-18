<template>
  <div class="forum">
    <iframe class="forum__frame" src="https://2ch.hk/vg/" frameborder="0"></iframe>
  </div>
</template>
  
  <style>
  .forum__frame {
    width: 100%;
    height: 100vh;
  }

  @media (min-width: 1024px) {
    .forum {
      height: 100%;
      min-height: 100vh;
    }
  }
  </style>
  