<template>
    <div class="map" style="height: 600px; width: 100%">
      <l-map
        ref="map"
        style="height: 100%; width: 100%"
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
        @ready="setMap"
      >
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker v-if="incident !== undefined" :lat-lng="incidentLatLon"></l-marker>
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
      map: undefined
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
    }
  },
  name: "Map",
  created: function() {
    // Make async to await api call to backend
    this.incident = IncidentService.getIncident();
    this.center = [this.incident.address.latitude, this.incident.address.longitude];
    if (this.map !== undefined ) {
      console.log('here')
    }
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
    }
  }
};
</script>
<style>
</style>
