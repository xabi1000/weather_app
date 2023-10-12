<script>
  // @ts-nocheck
  import { onMount } from 'svelte';
  import { getDateTimeDay } from '../../servises/date.js';

  import { apiData } from '../../stores/api_data.js';
  let date = getDateTimeDay();

  $: [dia, fecha, hora] = date.split(',');
  $: [, min, sec] = hora.split(':');
  $: hor = $apiData?.localtime?.split(' ')[1].split(':')[0];
  $: sec = sec?.split(' ')[0];

  onMount(async () => {
    setInterval(() => {
      date = getDateTimeDay();
    }, 1000);
  });
</script>

<header class="card_header">
  <h1>{$apiData?.name}</h1>

  <div class="header_item watch">
    <strong class="clock"
      >{hor > 9 ? hor : `0${hor}`}</strong
    >
    :
    <strong class="clock">{min}</strong> :
    <strong class="clock">{sec}</strong>
  </div>

  <div class="header_item date">
    <span>{dia?.toUpperCase()}</span>
    <span>{fecha}</span>
  </div>
</header>

<style>
  :is(.card_header, .header_item) {
    width: 100%;
  }

  h1 {
    text-align: center;
    margin: 0;
  }

  .card_header {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }

  .header_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.7rem;
  }

  .clock {
    width: 30px;
    height: 30px;
  }

  .watch {
    justify-content: center;
    gap: var(--gap);
    text-align: center;
  }

  .date {
    text-align: center;
  }
</style>
