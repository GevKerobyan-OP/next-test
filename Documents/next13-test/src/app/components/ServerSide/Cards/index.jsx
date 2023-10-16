import Image from 'next/image'
import Link from 'next/link';
import styles from './card.module.css'

const Card = ({ country }) => {
  const population = country.population.toLocaleString();
  const countryName = country.name.common.toLowerCase()
  return (
    <Link href={`/country/${countryName}`} className={styles.cardBox} >
      <Image
        src={country.flags.png}
        alt={country.flags.alt}
        width={300}
        height={200}
        priority
      />
      <h3 className={styles.countryName}>{country.name.common}</h3>
      <div className={styles.bottomInfo}>
        <p> <span>Population:</span> {population}</p>
        <p> <span>Region:</span> {country.region}</p>
        <p> <span>Capital:</span> {country.capital}</p>
      </div>
    </Link>
  )
}
export default Card