import styles from './page.module.css';
import Card from './components/ServerSide/Cards';
import HomePageTopBar from './components/ClientSide/TopBar';
import fetchByRegion from '@/lib/fetchByRegion';
import fetchCountry from '@/lib/fetchCountry';

const Home = async ({ searchParams }) => {

	const region = searchParams.region || 'asia'
	const allCountriesPromise = fetchByRegion(region)
	const allCountries = await allCountriesPromise

	let displayedCountries = allCountries

	if (searchParams.q) {
		if (!searchParams.region) {
			const countryPromise = fetchCountry(searchParams.q)
			const countryData = await countryPromise
			displayedCountries = countryData
		} else {
			console.log('mtav else ')
			displayedCountries = allCountries.filter(country => (country.name.common.toLowerCase().includes(searchParams.q)));
		}
	}
	return (
		<main className={styles.main}>
			<section>
				<HomePageTopBar />

				<div className={styles.cardsSectionContainer}>
					{
						displayedCountries.length
							? displayedCountries.map(country => (
								< Card key={country.cca3} country={country} />
							))
							: <div>No countries matched your search</div>
					}
				</div>
			</section>
		</main>
	);
}

export default Home