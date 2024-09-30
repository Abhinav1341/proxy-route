const axios = require("axios");

export default async function handler(req, res) {
  try {
    const response = await axios.get("http://3.27.184.84:5000/getRoute");

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from HTTP server" });
  }
}
