<template>
  <section class="footer">
    <div class="footerContent">
      <p>
        &copy; {{ currentYear }} — Desenvolvido por
        <a href="https://github.com/jackelinepaula" target="_blank">@jackelinepaula</a>
      </p>
    </div>
  </section>
</template>
<script setup>
const date = new Date()
const currentYear = date.getFullYear()
</script>
<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: var(--strong-gray);
  margin-top: 4rem;
}

.footer a {
  &:hover {
    color: var(--purple);
    text-decoration: underline;
  }
}
</style>
