<script>
  import Humidity from '../icons_svg_components/icon_humidity.svelte';
  import Temperature from '../icons_svg_components/icon_temperature.svelte';
  import Wind from '../icons_svg_components/icon_wind.svelte';
  export let day;
</script>

<div class="day_info">
  <h4 class="day_date">Date: {day?.date}</h4>
  <h5 class="day_condition">{day?.day?.condition?.text}</h5>

  <ul>
    <li class="date date_icon">
      <img
        width="50px"
        src={day?.day?.condition?.icon}
        alt="icon condition weather"
      />
    </li>
    <li class="date">
      <div class="temp">
        <span>Max</span><span><Temperature /></span>
      </div>
      <b>{day?.day?.maxtemp_c}℃</b>
    </li>
    <li class="date">
      <div class="temp">
        <span>Min</span><span><Temperature /></span>
      </div>
      <b>{day?.day?.mintemp_c}℃</b>
    </li>
    <li class="date">
      <span><Humidity /></span>
      <b>{day?.day?.avghumidity}%</b>
    </li>
    <li class="date">
      <span><Wind /></span>
      <b>{day?.day?.maxwind_kph}Km/h</b>
    </li>
  </ul>
</div>

<style>
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--gap);
    border-inline-start: var(--sunset_color) 1px solid;
    padding: 2vw 1vw 0 1vw;
  }

  .day_date {
    color: var(--sunset_color);
    text-align: center;
  }

  .day_condition {
    text-align: center;
    color: var(--sunrise_color);
    font-size: 1.2rem;
    margin: 0;
  }

  .date {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 5rem;
    height: 5rem;
    padding: 0.5em;
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 7px -1px var(--sunset_color);
    border-radius: 7px;
  }

  .temp {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .date_icon {
    justify-content: center;
  }
</style>
