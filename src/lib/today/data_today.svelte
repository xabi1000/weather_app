<script>
  // @ts-nocheck
  import { apiData } from '../../stores/api_data.js';
  import Humidity from '../icons_svg_components/icon_humidity.svelte';
  import Temperature from '../icons_svg_components/icon_temperature.svelte';
  import Wind from '../icons_svg_components/icon_wind.svelte';
</script>

<ul class="card_info">
  <li class="humidity">
    <span>
      <Humidity />
    </span>

    <span>{$apiData?.humidity} <b>%</b></span>
  </li>
  <li class="temperature">
    <span>
      <Temperature />
    </span>
    <span>{$apiData?.temp_c} <b>&#8451;</b></span>
  </li>
  <li class="wind">
    <span>
      <Wind />
    </span>
    <span>{$apiData?.wind_kph} <b>km/h</b></span>
  </li>
  <li class="icon">
    <img src={$apiData?.icon} alt="icon today weather" />
    <span class="day_describtion">{$apiData?.text}</span>
  </li>
</ul>

<style>
  :is(.card_info, .card_info > li) {
    width: 100%;
  }

  .card_info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 3.5rem 3.5rem 1fr;
    gap: var(--gap);
    backdrop-filter: blur(5px);
  }

  .card_info li {
    backdrop-filter: blur(9px);
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .card_info li b {
    font-size: 1rem;
  }

  .humidity {
    grid-column: 1 / 2;
    grid-row: 1 / 1;
  }
  .temperature {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  .wind {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  .icon {
    grid-column: 1 / 4;
    grid-row: 3 / 4;
    padding: 1rem;
    animation: 3.5s mouve infinite ease-in-out;
  }

  .icon img {
    width: 115px;
  }

  @keyframes mouve {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
