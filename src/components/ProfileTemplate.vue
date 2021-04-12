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
        <v-card height="200px"
          class="pa-2"
          outlined
          tile
        >
          Mapa
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
  <!--v-card>
    <h2> {{ profile }}</h2>
    <v-card-actions>
      <v-btn color="#fd0015" flat @click.stop="show=false">Cerrar</v-btn>
    </v-card-actions>
  </!--v-card-->
</v-dialog>
</template>

<script>

export default {
  props: {
    visible: Boolean,
    profile: Object
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
        // alert(JSON.stringify(this.profile))
      }
    }
  }
}
</script>
