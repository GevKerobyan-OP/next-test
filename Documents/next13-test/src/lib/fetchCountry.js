const fetchCountry = async (countryName, short = null) => {
  const baseUrl = process.env.API_BASE_URL;
  const fields = short
    ? "name"
    : "name,cca3,cioc,population,capital,region,languages,subregion,borders,continents,flags";
  const suffix = short ? "alpha" : "name";
  try {
    const results = await fetch(
      `${baseUrl}/${suffix}/${countryName}?fields=${fields}`
    );

    if (results.ok) {
      return results.json();
    } else {
      console.error(
        `Error fetching data for ${countryName}. Status: ${results}`
      );
      return null;
    }
  } catch (catchError) {
    console.log("consoling: catchError in FETCH COUNTRY =====> ", catchError);

    throw new Error(
      "Server issues while getting country data ! Pls try again later"
    );
  }
};

export default fetchCountry;
