#!/usr/bin/env node
const axios = require('axios').default;


require('dotenv').config()


class Spoonacular {
    constructor(key = process.env.SPOONACULAR_KEY) {
        if (!key) {
            throw Error("Spoonacular API key missing")
        }
        this.api_key = key
        this.client = axios.create({
            baseURL: 'https://api.spoonacular.com/',
            timeout: 5000,
            params: {
                'apiKey': this.api_key,
            }
          });
    }

    search(query) {
        return this.client.get(
            '/recipes/complexSearch',
            {
                params: {
                    query,
                }
            }
        )
    }
}


async function main() {
    const client = new Spoonacular();
    const searchResp = await client.search('bobotie');
    const results = searchResp.data;
    console.log(results);
}


main()