'use client'

import styles from './topBar.module.css'
import Regions from '@/lib/constants'
import { ChevronDown, SearchInputIcon } from '../../../../../public/Icons'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState, useCallback } from 'react'
import { useDebounce } from 'use-debounce'

const HomePageTopBar = () => {

  const router = useRouter()
  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState('')
  const [regionValue, setRegionValue] = useState('')

  const [isSelectDropdown, setSelectDropdown] = useState(false)

  const [query] = useDebounce(searchValue, 500)

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  // =====> setting Params
  const handleRegionPick = selectedRegion => {
    setRegionValue(selectedRegion);
    toggleSelectDropdown();
    router.push(`/?${createQueryString('region', selectedRegion)}`)
  }

  useEffect(() => {
    router.push(`/?${createQueryString('q', query?.toString())}`)
    !query && !regionValue && router.push(' / ')
  }, [query, searchParams])


  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setSearchValue(e.target.value);
    }
  }

  const toggleSelectDropdown = () => {
    setSelectDropdown(prev => !prev)
  }

  return (
    <div className={styles.homePageTopBar}>
      <div className={styles.searchInputContainer} >
        <SearchInputIcon size={20} />
        <input
          type='text'
          id='searchInput'
          name='searchInput'
          placeholder='Search for a country'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className={styles.select_group} >
        <button className={styles.button} onClick={toggleSelectDropdown}>
          <span className={styles.selectPlaceholder}>{regionValue ? regionValue : 'Filter by region'}<ChevronDown size={18} /></span>
        </button>
        {isSelectDropdown
          ? <div className={styles.dropdown} id='dropdown'>
            {Regions.map(region => (
              <div key={region}>
                <label htmlFor={`select-${region}`} className={styles.select_item} onClick={() => handleRegionPick(region)}>{region}
                </label>
                <input type='radio' id={`select-${region}`} name='regions' value={region} className={styles.option} />
              </div>
            ))}
          </div>
          : null
        }
      </div>
    </div >
  )
}
export default HomePageTopBar