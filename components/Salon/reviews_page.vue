<template>
  <v-container style="max-width: 600px">
    <v-timeline dense clipped>
      <v-timeline-item fill-dot class="white--text mb-10" color="orange" large>
        <template v-slot:icon>
          <span>JL</span>
        </template>

        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
          large
        ></v-rating>

        <v-text-field
          v-model="input"
          hide-details
          flat
          label="Leave a review..."
          solo
          @keydown.enter="comment"
        >
          <template v-slot:append>
            <v-btn class="mx-0" depressed @click="comment"> Post </v-btn>
          </template>
        </v-text-field>
      </v-timeline-item>

      <v-slide-x-transition group>
        <v-timeline-item
          v-for="event in timeline"
          :key="event.id"
          class="mb-4"
          color="pink"
          small
        >
          <v-row justify="space-between">
            <v-col cols="7" v-text="event.text"></v-col>
            <v-col class="text-right" cols="5" v-text="event.time"></v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item class="mb-6" hide-dot>
        <span>TODAY</span>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="grey"
        icon-color="grey lighten-2"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7"> This order was archived. </v-col>
          <v-col class="text-right" cols="5"> 15:26 EDT </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" small>
        <v-row justify="space-between">
          <v-col cols="7">
            <v-chip class="white--text ml-0" color="purple" label small>
              APP
            </v-chip>
            Digital Downloads fulfilled 1 item.
          </v-col>
          <v-col class="text-right" cols="5"> 15:25 EDT </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="grey" small>
        <v-row justify="space-between">
          <v-col cols="7">
            Order confirmation e l was sent to John Leider (john@vuetifyjs.com).
          </v-col>
          <v-col class="text-right" cols="5"> 15:25 EDT </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" hide-dot>
        <v-btn class="mx-0"> Resend Email </v-btn>
      </v-timeline-item>

    </v-timeline>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    events: [],
    input: null,
    nonce: 0,
    rating: 5,
  }),

  computed: {
    timeline() {
      return this.events.slice().reverse();
    },
  },

  methods: {
    comment() {
      const time = new Date().toTimeString();
      if (this.input) {
        this.events.push({
          id: this.nonce++,
          text: this.input,
          time: time.replace(
            /:\d{2}\sGMT-\d{4}\s\((.*)\)/,
            (match, contents, offset) => {
              return ` ${contents
                .split(" ")
                .map((v) => v.charAt(0))
                .join("")}`;
            }
          ),
        });
      }

      this.input = null;
    },
  },
};
</script>