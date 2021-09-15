#!/usr/bin/env node
const axios = require("axios").default;

require("dotenv").config();

class Yummly {
  constructor(key = process.env.RAPIDAPI_YUMMLY_KEY) {
    if (!key) {
      throw Error("Yummly API key missing");
    }
    this.api_key = key;
    this.client = axios.create({
      baseURL: "https://yummly2.p.rapidapi.com",
      timeout: 5000,
      headers: {
        "x-rapidapi-host": "yummly2.p.rapidapi.com",
        "x-rapidapi-key": this.api_key,
      },
    });
  }

  async search(q) {
    if (!q) {
      return undefined
    }
    const resp = await this.client.get(`/feeds/search`, { params: { q: q.replace(' ', '%20') } });
    if (resp.status !== 200) {
        throw Exception("Uh oh!")
    }
    return resp.data.feed[0]
  }
}

module.exports = Yummly