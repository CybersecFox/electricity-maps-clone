// EIA API for US electricity data
class EIAApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.eia.gov/v2/';
    }

    async getElectricityData(region = 'US') {
        const endpoint = `electricity/rto/region-data/data/?frequency=hourly&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000&api_key=${this.apiKey}`;
        
        try {
            const response = await fetch(this.baseUrl + endpoint);
            return await response.json();
        } catch (error) {
            console.error('EIA API Error:', error);
            return null;
        }
    }
}
