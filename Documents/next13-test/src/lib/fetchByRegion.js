const fetchByRegion = async (region) => {
  const baseUrl = process.env.API_BASE_URL;
  try {
    const results = await fetch(
      `${baseUrl}/region/${region}?fields=cca3,population,name,flags,region,capital`
    );

    return results.json();
  } catch (catchError) {
    console.log("consoling: catchError in FETCH BY REGION =====> ", catchError);
    throw new Error(
      "Server issues while getting country data ! Pls try again later"
    );
  }
};

export default fetchByRegion;
