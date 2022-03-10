
import styles from '../styles/Toolbar.module.css'
import Toolbar from '../components/toolbar'
import withSession from '../hoc/withSession'


function Secret(props) {
    const { user } = props;
 

    return (
        <> 
            <Toolbar />
            { user ? <p>{`This is a secret Page of ${user}`}  </p> : <p>Secret page</p>}
        </>
    )
}

export default withSession(Secret);