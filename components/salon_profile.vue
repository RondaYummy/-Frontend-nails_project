<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      height="200px"
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <!-- Для малих розмірів екрана можна використати замість нижніж -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>SALON_NAME </v-app-bar-title>

      <v-spacer></v-spacer>
      <div class="text-center d-flex">
        <span class="font-weight-bold pt-2">
          {{ rating }}
        </span>
        <div class="text-center">
          <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            large
          ></v-rating>
        </div>
      </div>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="yellow" v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs align-with-title v-model="tab">
          <v-tab v-for="item in itemsMenu" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="700"
    >
      <v-container style="height: 300px">Lorem100</v-container>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
            <reviews-page />
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat class="d-flex flex-wrap justify-space-around">
            <h1>Services page</h1>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat class="d-flex flex-wrap justify-space-around">
            <masters-list />
            <masters-list />
            <masters-list />
            <masters-list />
            <masters-list />
            <masters-list />
            <masters-list />
            <masters-list />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-sheet>
  </v-card>
</template>

<script>
import reviewsPage from "./Salon/reviews_page.vue";
import mastersList from "./Salon/masters_list.vue";

export default {
  components: {
    reviewsPage,
    mastersList,
  },
  data: () => ({
    title: `Salon`,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    tab: null,
    itemsMenu: ["Main", "Services", "Masters"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    length: 5,
    rating: 3.5,
  }),
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "salon",
          name: "salon",
          content: "My custom salon",
        },
      ],
    };
  },
};
</script>

<style>
</style>