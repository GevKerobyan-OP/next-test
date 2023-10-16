import fetchCountry from '@/lib/fetchCountry'
import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import { ArrowLeftIcon } from '../../../../public/Icons'

export const generateStaticParams = async () => {
  const result = await fetch('https://restcountries.com/v3.1/all?fields=name')

  const data = await result.json()

  return data.map(country => {
    return {
      countryName: country.name.common
    }
  })
}

const CountryPage = async ({ params: { countryName } }) => {

  // =====> GET COUNTRY DATA

  const countryPromise = fetchCountry(countryName)
  const countryData = (await countryPromise)[0]

  // =====> GET COUNTRY NEIGHBOR NAMES

  const neighbors = await Promise.all(
    countryData.borders.map(async (border) => {
      const borderData = await fetchCountry(border, true);
      return borderData.name.common;
    })
  );

  const retrieveNativeName = (languagesObj, nativeNameObj) => {
    const nativeLanguage = Object.keys(languagesObj)[0]
    return nativeNameObj[nativeLanguage].common
  }

  const nativeName = retrieveNativeName(countryData.languages, countryData.name.nativeName)

  const population = countryData.population.toLocaleString();

  return (
    <section>
      <div className={styles.countryPageTopBar}>
        <Link href={'/'}>
          <button className={styles.backBtn}>
            <ArrowLeftIcon size={26} />
            Back
          </button>
        </Link>
      </div>
      <div className={styles.countryContainer}>
        <Image
          src={countryData.flags.svg}
          alt='Moon Icon'
          width={500}
          height={400}
          priority
        />

        <div className={styles.countryInfoBox}>
          <h2>{countryData.name.common}</h2>
          <div className={styles.infoBlock}>
            <div className={styles.infoBlockSide}>
              <p> <span>Native Name:</span> {nativeName}</p>
              <p> <span>Population:</span> {countryData.region}</p>
              <p> <span>Region:</span> {countryData.capital}</p>
              <p> <span>Sub Region:</span> {countryData.capital}</p>
              <p> <span>Capital:</span> {countryData.capital}</p>
            </div>

            <div className={styles.infoBlockSide}>
              <p> <span>Tope Level Domain:</span> {population}</p>
              <p> <span>Currencies:</span> {countryData.region}</p>
              <p> <span>Languages:</span> {countryData.capital}</p>
            </div>
          </div>

          <div className={styles.countryBlockFooter}>
            <div className={styles.countryBlockFooterContent}>
              <p>Border Countries: </p>
              <div className={styles.neighborTagStack}>
                {neighbors.map((neighbor, i) => {
                  console.log('consoling: neighbor :::', neighbor)
                  return <Link key={i} href={`/country/${neighbor}`} className={styles.tag}>{neighbor}</Link>
                }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default CountryPage