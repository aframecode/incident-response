<template>
    <div class="map" style="height: 600px; width: 100%">
      <v-dialog
        v-model="overlay"
        max-width="600"
      >
        <v-card>
          <v-card-title class="headline">{{ incident.description.type }} - {{ incident.description.subtype }}</v-card-title>

          <v-card-text>
            Full Description: 
             <v-textarea
              outlined
              :value="incidentJSON"
            ></v-textarea>
          </v-card-text>

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
      overlay: false
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
    incidentJSON: function () {
      if ( this.incident !== undefined ) {
        return JSON.stringify(this.incident.description, null, 2)
      }
      else {
        return null;
      }
    }
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
