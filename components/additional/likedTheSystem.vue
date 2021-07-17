<template>
  <section class="info_section">
    <div class="info__section_left">
      <h3>Стодобався КОМПЛЕКС?</h3>
      <h2>Створи красу разом із нами!</h2>
    </div>
    <div class="info__section_right">
      <button class="button" @click="$router.push('/registration')">Створити аккаунт</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info_section {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  align-items: center;
  padding: 75px 30px 80px 30px;
  height: 220px;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#82b4ce),
    to(#aad2e6)
  );
  background-image: -o-linear-gradient(left, #82b4ce, #aad2e6);
  background-image: linear-gradient(to right, #82b4ce, #aad2e6);
  .info__section_left {
    padding-left: 2rem;
    max-width: 440px;
    margin-right: 48px;
    color: #fff;
    display: flex;
    justify-content: right;
    flex-direction: column;
    h3 {
      padding-bottom: 16px;
      font-size: 18px;
      text-transform: uppercase;
      color: #fff;
    }
    h2 {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.45;
      color: #fff;
      text-transform: uppercase;
    }
  }
  .info__section_right {
    display: flex;
    justify-content: left;
    max-width: 440px;
    .button {
      min-width: 300px;
      min-height: 60px;
      font-family: "Nunito", sans-serif;
      font-size: 22px;
      text-transform: uppercase;
      letter-spacing: 1.3px;
      font-weight: 600;
      color: #313133;
      background: #4fd1c5;
      background: linear-gradient(
        90deg,
        rgba(129, 230, 217, 1) 0%,
        rgba(79, 209, 197, 1) 100%
      );
      border: none;
      border-radius: 1000px;
      box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
      transition: all 0.3s ease-in-out 0s;
      cursor: pointer;
      outline: none;
      position: relative;
      z-index: 5;
    }

    button::before {
      content: "";
      border-radius: 1000px;
      min-width: calc(300px + 12px);
      min-height: calc(60px + 12px);
      border: 6px solid #00ffcb;
      box-shadow: 0 0 60px rgba(0, 255, 203, 0.64);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all 0.3s ease-in-out 0s;
    }

    .button:hover,
    .button:focus {
      color: #313133;
      transform: translateY(-6px);
    }

    button:hover::before,
    button:focus::before {
      opacity: 1;
    }

    button::after {
      content: "";
      width: 30px;
      height: 30px;
      border-radius: 100%;
      border: 6px solid #00ffcb;
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: ring 1.5s infinite;
    }

    button:hover::after,
    button:focus::after {
      animation: none;
      display: none;
    }

    @keyframes ring {
      0% {
        width: 30px;
        height: 30px;
        opacity: 1;
      }
      100% {
        width: 200px;
        height: 200px;
        opacity: 0;
      }
    }
  }
}
</style>