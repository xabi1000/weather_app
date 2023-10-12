<script>
  // @ts-nocheck
  import { apiData } from '../../stores/api_data.js';
</script>

<div
  class="is_day {$apiData?.is_day === 1
    ? 'is_day'
    : 'is_night'} "
>
  <img
    src={$apiData?.is_day === 1
      ? '/images/sun.webp'
      : '/images/moon.webp'}
    alt=""
  />
</div>

<style>
  .is_day {
    box-shadow: 0px 0px 18px 1px var(--sunrise_color);
    width: 77px;
    height: 77px;
    border-radius: 50%;
    overflow: hidden;
  }

  .is_day img {
    object-fit: cover;
    min-height: 100%;
  }

  .is_night {
    box-shadow: 0px 0px 18px 1px white;
  }
</style>
