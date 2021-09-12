#!/usr/bin/env node
const axios = require("axios").default;

require("dotenv").config();

async function main() {
  const client = new Yummly();
  try {
    const searchResp = await client.search("bobotie");
    const results = searchResp.data;
    console.log(JSON.stringify(results.feed[0]))
  } catch (error) {
    console.log(error);
  }
}

main();
