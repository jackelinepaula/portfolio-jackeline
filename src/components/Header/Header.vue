<script></script>
<template>
  <header>
    <div>
      <p><a href="/">Jackeline.</a></p>
    </div>

    <nav>
      <ul>
        <li><a href="#sobre">sobre mim</a></li>
        <li><a href="#jornada">jornada-acadêmica</a></li>
        <li><a href="#projetos">projetos</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 3rem;
  justify-content: space-between;
  font-family: 'Fira Mono', sans-serif;
}

ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 3rem;
}

li {
  cursor: pointer;
}

li a:hover {
  text-decoration: underline;
  color: var(--purple);
}
</style>
