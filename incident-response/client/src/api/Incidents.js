import axios from "axios";

export default {
  // Need to put more time into creating API structure
  async getIncident() {
    try {
      const response = await axios.get("/api/v1/incident");
      return response.data;
    } catch {
      // Should do something to alert the user to error or retry
    }
  }
};
