<template>
  <div class="home">
    <v-row justify="end" :class="{'pa-12': $vuetify.breakpoint.mdAndUp, 'pa-5':$vuetify.breakpoint.smAndDown}">
      <v-col cols="12" lg="6" xl="6" md="6" sm="12" xs="12">
        <v-card flat class="pa-4">
          <h1 class="pl-4">G-Escola</h1>
          <v-card-text>{{ smallDesc }}</v-card-text>
          <v-list>
            <v-list-item v-for="(point, i) in positivePoints" :key="i">
              <v-list-item-icon>
                <v-icon color="green">mdi-check</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ point }}</v-list-item-title>
            </v-list-item>
          </v-list>
          <v-card-actions>
            <v-row justify="end" class="ma-0 hidden-sm-and-down">
              <v-btn dark @click="$router.push('/login')">
                  Gerencie sua escola
                <v-icon right>mdi-school</v-icon>
              </v-btn>
            </v-row>
            <v-row justify="center" class="ma-0 hidden-md-and-up">
              <v-btn dark @click="$router.push('/login')">
                Gerencie sua escola
                <v-icon right>mdi-school</v-icon>
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.home {
  height: 100%;
  background-image: url("../assets/school.jpg");
  background-position: 0 100%;
  background-size: 50% 100%;
}

@media (max-width: 480px) {
  .home {
    background-image: url("../assets/school.jpg");
    background-position: 0 100%;
    background-size: 100% 100%;
  }
}
@media (min-width: 481px) and (max-width: 1024px) and (orientation: portrait) {
  .home {
    background-image: url("../assets/school.jpg");
    background-position: 0 100%;
    background-size: 100% 100%;
  }
}
@media (min-width: 481px) and (max-width: 1024px) and (orientation: landscape) {
  .home {
    background-image: url("../assets/school.jpg");
    background-position: 0 100%;
    background-size: 100% 100%;
  }
}
@media (min-width: 1025px) {
  .home {
    background-image: url("../assets/school.jpg");
    background-position: 0 100%;
    background-size: 50% 100%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      smallDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec leo faucibus, tincidunt orci in, facilisis justo. Aliquam eleifend gravida velit, et consectetur ex molestie sit amet. Vivamus pulvinar justo massa, in volutpat ligula hendrerit ac. Nunc eu leo vel ante elementum maximus a pulvinar mi. Vestibulum tincidunt, nunc cursus efficitur egestas, felis massa convallis turpis, vitae imperdiet dolor neque quis est. Donec bibendum tellus sit amet suscipit blandit. Sed scelerisque tellus eget felis placerat varius. Etiam consequat ut erat vitae molestie. Donec vel fringilla mauris. ",
      positivePoints: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
    };
  },
};
</script>
