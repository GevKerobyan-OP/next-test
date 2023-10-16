import Link from 'next/link';
import styles from './header.module.css';
import ThemeButton from '../../ClientSide/ThemeButton';

const Header = () => {
  return (
    <header className={styles.headerLayout}>
      <div className={styles.container}>
        <Link href={'/'}>
          <h3>Where in the world?</h3>
        </Link>
        <ThemeButton />
      </div>
    </header>
  )
}
export default Header