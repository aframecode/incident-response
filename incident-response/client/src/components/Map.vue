<template>
    <div class="map" style="height: 600px; width: 100%">
      <v-dialog
        v-model="overlay"
        max-width="600"
      >
        <v-card>
          <v-card-title class="headline">{{ incident.description.type }} - {{ incident.description.subtype }}</v-card-title>

          <v-tabs
            v-model="tab"
            background-color="deep-purple accent-4"
            class="elevation-2"
            dark
            :centered="centered"
            :grow="grow"
            :vertical="vertical"
            :right="right"
            :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
            :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
            :icons-and-text="icons"
          >
            <v-tabs-slider></v-tabs-slider>

            <v-tab
              v-for="i in tabs"
              :key="i"
              :href="`#${i}`"
            >
              {{ i }}
            </v-tab>

            <v-tab-item
              v-for="i in tabs"
              :key="i"
              :value="i"
            >
              <v-card
                flat
                tile
              >
                <v-card-text>
                  <v-textarea
                      outlined
                      :value="JSON.stringify(incident[i], null, 2)"
                    ></v-textarea>
                </v-card-text>
              
              </v-card>
            </v-tab-item>
          </v-tabs>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="overlay = false"
            >
              close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <l-map
        ref="map"
        style="height: 100%; width: 100%"
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
        @ready="setMap"
        v-show="!overlay"
      >
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker  @click="showDetails"  v-if="incident !== undefined" :lat-lng="incidentLatLon"></l-marker>
      </l-map>
      
    </div>
</template>

<script>
import IncidentService from '@/api/Incidents.js';

export default {
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 15,
      center: [38.9, -77],
      bounds: null,
      incident: undefined,
      map: undefined,
      overlay: false,
      tab: null,
      tabs: ['address', 'apparatus', 'description', 'fire_department']
    };
  },
  computed: {
    incidentLatLon: function () {
      if ( this.incident !== undefined ) {
        return [this.incident.address.latitude, this.incident.address.longitude]
      }
      else {
        return null;
      }
    },
  },
  name: "Map",
  created: function() {
    // Make async to await api call to backend
    this.incident = IncidentService.getIncident();

    // Add graceful zoom to fit
    this.center = [this.incident.address.latitude, this.incident.address.longitude];
  },
 
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    },
    setMap () {
      this.map = this.$refs.map.mapObject;
    },
    showDetails() {
      this.overlay = true;
      console.log("details");
    }
  }
};
</script>
<style>
</style>
