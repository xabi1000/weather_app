<script>
  import { getWeatherData } from '../../servises/weathrapi.js';
  import { apiData } from '../../stores/api_data.js';
  import { GET_IP } from '../../servises/location.js';
  let input_value = '';

  async function updateContextValue() {
    const ip = await GET_IP();
    let locationWanted = await getWeatherData(input_value);
    const userLocation = await getWeatherData(ip);
    console.log(locationWanted['country']);
    locationWanted['country'] === undefined ||
    input_value?.length < 3
      ? apiData.set(userLocation)
      : apiData.set(locationWanted);

    input_value = '';
  }
</script>

<form
  role="search"
  on:submit|preventDefault={updateContextValue}
  class="input_containre"
>
  <label for="search">
    <!-- svelte-ignore a11y-autofocus -->
    <input
      class="serch"
      placeholder="london, united kindom, city of london,...."
      title="london, united kindom, city of london,...."
      type="search"
      name="search"
      id="search"
      autofocus
      bind:value={input_value}
      autocomplete="off"
    />
    <input class="button" type="submit" value="search" />
  </label>
</form>

<style>
  form {
    max-width: 100%;
    /* margin-bottom: auto; */
  }
  label {
    display: flex;
    justify-content: space-between;
    gap: var(--gap);
  }
  input {
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #5e928a1c;
    padding: 0 1rem;
    font-size: 1.1rem;
  }

  input::placeholder {
    color: rgb(202, 230, 230);
    font-size: 0.9rem;
  }
  input:hover,
  input:focus {
    outline: 1px solid green;
  }

  .serch {
    width: 75%;
  }
</style>
