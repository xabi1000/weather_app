<script>
  // @ts-nocheck

  import { apiData } from '../../stores/api_data.js';
  import InfoDay from './info_day.svelte';
  $: forecastWeek = $apiData?.forecast?.forecastday;
</script>

<section class="card_extended">
  {#each forecastWeek as day, i}
    <InfoDay {day} />
  {/each}
</section>

<style>
  .card_extended {
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gap);
  }
</style>
