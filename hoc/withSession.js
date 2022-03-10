
import { useRouter, Router } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Toolbar.module.css'
import Toolbar from '../components/toolbar'

function withSession(Component) {
        const WrappedComponent = (props) => {
            const router = useRouter();
            const token = {
                username: "rebecca",
                role: "user"
            }
                
            useEffect(() => {
                if (token.role !== "admin" || !token.username) {
                    setTimeout( () => {
                        router.push('/')
                    }, 500) 
                } ;
            }, [])

            return token.username && token.role === "admin" ? <Component user={token.username} /> : <p>Not authorized to access ...</p>;
            //return <div>NOt authorized to access</div>;
          };
          return WrappedComponent;
}

export default withSession;