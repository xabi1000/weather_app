<script>
  // @ts-nocheck
  import { apiData } from './stores/api_data.js';
  import { getWeatherData } from './servises/weathrapi.js';
  import { onMount } from 'svelte';
  // COMPONENTS
  import VideoWrapper from './lib/video-wrapper.svelte';
  import Loader from './lib/loader.svelte';
  import ForecastExtended from './lib/forecast/forecast_extended.svelte';
  import CoverContainer from './lib/today/cover_container.svelte';

  onMount(async () => {
    await getWeatherData();
  });
</script>

<main>
  <VideoWrapper />
  {#if $apiData?.is_day !== undefined}
    <CoverContainer />
    <ForecastExtended />
  {:else}
    <Loader />
  {/if}
</main>

<style>
  main {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(100vh, auto) 1fr;
    gap: 1.5em 0;
  }

  @media (min-width: 777px) {
    main {
      grid-template-columns:
        minmax(
          var(--min_width_today_mobile_section, 360px),
          33%
        )
        1fr;
      gap: 0 1.5em;
      grid-template-rows: 100vh;
    }
  }
</style>
