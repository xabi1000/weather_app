<div class="wrapper">
  <span class="loader" />
</div>

<style>
  .wrapper {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.95);
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
  }
  .loader {
    width: 5em;
    height: 5em;
    outline: 5px solid #ffff00;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  .loader::after,
  .loader::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    background: #000000;
    width: 6px;
    height: 6px;
    transform: translate(150%, 150%);
    border-radius: 50%;
  }
  .loader::before {
    left: auto;
    top: auto;
    right: 0;
    bottom: 0;
    transform: translate(-150%, -150%);
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
