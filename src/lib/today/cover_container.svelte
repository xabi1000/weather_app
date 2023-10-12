<script>
  // @ts-nocheck
  import InputSearch from './input_search.svelte';
  import Header from './header.svelte';
  import IsDay from './is_day.svelte';
  import DataToday from './data_today.svelte';
  import Astro from './astro.svelte';
</script>

<section class="card_today">
  <InputSearch />
  <Header />
  <IsDay />
  <DataToday />
  <Astro />
</section>

<style>
  .card_today {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: var(--gap);
    border-radius: 7px;
    padding: 1rem;
    min-width: 350px;
    max-width: 100%;
    backdrop-filter: blur(15px);
    font-size: var(--card_font_sise);
  }
</style>
