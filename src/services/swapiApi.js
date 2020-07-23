/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */

export default class SwapiService {
    async getResource(url) {
        const answer = await fetch(url);

        if (!answer.ok) {
            throw new Error(`Could not fetch! + ${url}`);
        }
        return await answer.json();
    }

    async getAllPeople() {
        const res = await this.getResource('https://swapi.dev/api/people');
        return res.results;
    }
}
