<template>
<v-dialog v-model="show" max-width="600px">
<v-container class="grey lighten-5">
          <v-card-title class="headline dark lighten-2">
          Perfil
        </v-card-title>
    <v-row
      :class="''"
      no-gutters
    >
      <v-col
      >

          <v-img
            max-width="300"
            height="200px"
            v-bind:src="imageSrc"
          ></v-img>
      </v-col>
      <v-col
      >
        <div>
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
             data-projection="EPSG:4326" style="height: 200px">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-feature id="position-feature">
        <vl-geom-point :coordinates.sync="center"></vl-geom-point>
      </vl-feature>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
  </div>
      </v-col>
    </v-row>
    <v-row
      :class="''"
      no-gutters
    >
      <v-col
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <h3>
          {{ profile.name }}
        </h3>
        <v-card-text>
          {{ profile.email }}
        </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      :class="''"
      no-gutters
    >
      <v-col
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <v-card-text>
          {{ address }}
        </v-card-text>
        <v-card-text>
          {{ phones }}
        </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-dialog>
</template>

<script>

export default {
  props: {
    visible: Boolean,
    profile: Object
  },
  data () {
    return {
      zoom: 2,
      center: [0, 0],
      rotation: 0
    }
  },
  computed: {
    show: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    },
    imageSrc () {
      return this.profile.wrapper.picture.large
    },
    address () {
      return 'Address: ' + this.profile.wrapper.location.street.name + ' ' + this.profile.wrapper.location.street.number + ' ' + this.profile.wrapper.location.city + ' ' + this.profile.wrapper.location.country
    },
    phones () {
      return 'Phone: ' + this.profile.wrapper.phone + ' Cell: ' + this.profile.wrapper.cell
    }
  },
  watch: {
    show (visible) {
      if (visible) {
        this.zoom = 5
        this.center = [parseFloat(this.profile.wrapper.location.coordinates.longitude), parseFloat(this.profile.wrapper.location.coordinates.latitude)]
      }
    }
  }
}
</script>
<style>
#map {
  position: absolute;
  margin: 0;
  padding: 0;
  height: 200px;
  width: 300px;
}
</style>
