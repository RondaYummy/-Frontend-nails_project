<template>
   <main>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <section class="main-section">
        <h1>Nikki Nails</h1>
        <form>
          <button type="button"><a href="#">Показати на карті</a></button>
          <button type="button"><a href="#">Записатись</a></button>
        </form>
      </section>

      <p>
        «Ніколи не забувайте про манікюр.Руки — перше, що кидається в очі після
        вашого лиця»
      </p>
      <div class="text-xs-right">
        <em><small>&mdash; Julia Restoin Roitfeld</small></em>
      </div>
      <hr class="my-3" />
    </v-col>
  </v-row>

     </main>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.main-section {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 700px;

  h1 {
    color: #454546;
    font-weight: 400;
    position: relative;
    cursor: pointer;
    font-size: 56px;
  }

  h1::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 60%;
    height: 2px;
    margin-left: -30%;
    background: #454546;
    transition-property: all;
    transition-duration: 0.7s;
  }

  h1:hover::after {
    width: 100%;
    margin-left: -52%;
  }

  form {
    button {
      width: 220px;
      padding: 12px;
      border: none;
      border-radius: 2px;
      background-color: #33bb60;
      margin: 10px;
      cursor: pointer;

      a {
        text-decoration: none;
        color: whitesmoke;
        font-size: 16px;
      }
    }

    button:hover {
      background-color: #2ca354;
    }
  }
}
</style>
<style lang="scss" scoped>
   main {
  background-image: url("../assets/appearance.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>