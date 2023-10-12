<script>
  // @ts-nocheck
  import { apiData } from '../../stores/api_data.js';

  $: sunrise =
    $apiData?.forecast?.forecastday[0]?.astro?.sunrise;

  $: sunset =
    $apiData?.forecast?.forecastday[0]?.astro?.sunset;
</script>

<section class="astro">
  <ul class="astro_item">
    <li>
      <img src="/svg/sun.svg" alt="sun sunrise" />
    </li>
    <li class="sunrise">
      <i class="vertical">Sunrise</i>
      <strong>{sunrise}</strong>
    </li>
  </ul>

  <ul class="astro_item">
    <li>
      <img src="/svg/moon.svg" alt="moon sunset" />
    </li>

    <li class="sunset">
      <i class="vertical">Sunset</i>
      <strong>{sunset}</strong>
    </li>
  </ul>
</section>

<style>
  .astro,
  .astro_item {
    display: flex;
    align-items: center;
  }

  .astro {
    justify-content: space-between;
    width: 100%;
    font-size: 1.3rem;
    margin-top: auto;
  }

  .astro_item {
    flex: 0 0 45%;
    position: relative;
    flex-direction: column;
    justify-content: center;
    row-gap: var(--gap);
  }

  .astro_item .vertical {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    position: absolute;
    inset: 50% auto auto 0;
    transform: translateY(-81%);
    font-size: 1.3rem;
  }

  .astro_item img {
    border-radius: 50%;
    object-fit: cover;
    width: 75px;
    height: 75px;
  }

  .sunset {
    color: var(--sunset_color);
  }

  .sunrise {
    color: var(--sunrise_color);
  }
</style>
