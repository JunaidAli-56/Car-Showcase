export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '100fa44756msh2bf193d2a7bf6adp1decc7jsn45ce0eb6fc81',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });
    const result = await response.json();
    return result;
}