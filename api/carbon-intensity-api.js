// Carbon Intensity API for UK data
class CarbonIntensityApi {
    constructor() {
        this.baseUrl = 'https://api.carbonintensity.org.uk/';
    }

    async getCurrentIntensity() {
        try {
            const response = await fetch(this.baseUrl + 'intensity');
            return await response.json();
        } catch (error) {
            console.error('Carbon Intensity API Error:', error);
            return null;
        }
    }

    async getRegionalData() {
        try {
            const response = await fetch(this.baseUrl + 'regional');
            return await response.json();
        } catch (error) {
            console.error('Regional API Error:', error);
            return null;
        }
    }
}
