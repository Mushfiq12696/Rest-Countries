fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data));


const displayCountries = countries => {

    const countryInfo = document.getElementById('countries');
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //
    //     //countryName adding
    //     // const countryName = document.createElement('h3');
    //     // countryName.innerText = country.name;
    //     // countryName.style.color = 'white';
    //     // countryInfoContainer.appendChild(countryName);



    //     // //capital adding
    //     // const capitalName = document.createElement('h4');
    //     // capitalName.innerText = country.capital;
    //     // capitalName.style.color = 'white';
    //     // countryInfoContainer.appendChild(capitalName);
    //     // console.log(country.capital);


    // }
    countries.forEach(country => {
        const countryInfoContainer = document.createElement('div');
        const countryIntro = `
            <h3 class="country-name"> ${country.name}</h3>
            <p class="country-capital">${country.capital}</p>
            <button id="buttonId" onclick="displayCountryDetails('${country.name}')">Details</button>`;
        countryInfoContainer.innerHTML = countryIntro;
        countryInfoContainer.className = 'country-info';

        countryInfo.appendChild(countryInfoContainer);
    });

}


const displayCountryDetails = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            renderCountryInfo(data[0]);
        });

    const countryDIv = document.getElementById('countryDetails');
    const countries = document.getElementById('countries');
    countries.style.display = 'none';
    countryDIv.style.display = 'block';
}

const renderCountryInfo = country => {
    const countryDetails = document.getElementById('countryDetails');

    countryDetails.innerHTML = `
    <h1>${country.name.common}<h1/>
    <h3>Population :${country.population}<h3/>
    <p> Area :${country.area}</p>
    <img src="${country.flags.svg}">`
}