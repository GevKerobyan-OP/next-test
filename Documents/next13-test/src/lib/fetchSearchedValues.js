const fetchSearchedValues = async (searchParams) => {
  try {
    const baseUrl = process.env.API_BASE_URL;
    const selectedRegion = searchParams.region || undefined;
    const fields = "cca3,population,name,flags,region,capital";

    if (selectedRegion) {
      const results = await fetch(
        `${baseUrl}/region/${selectedRegion}?fields=${fields}`
      );
      return results.json();
    }
  } catch (catchError) {
    console.log(
      "consoling: catchError in FETCH SEARCHED VALUE =====> ",
      catchError
    );

    throw new Error("Server issues while searching ! Pls try again later");
  }
};

export default fetchSearchedValues;
