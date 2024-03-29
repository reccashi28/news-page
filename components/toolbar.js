import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css'

function Toolbar() {

    const router = useRouter();


    return (
        <div className={styles.main}> 
            <div onClick={ () => router.push('/')}>Home</div>
            <div onClick={ () => router.push('/feed/1')}>Feed</div>
            <div onClick={ () => router.push('/eom')}>EOM</div>
            <div onClick={ () => router.push('/about')}>About</div>
            <div onClick={ () => router.push('/secret')}>Secret</div>
        </div>
    )
}

export default Toolbar
