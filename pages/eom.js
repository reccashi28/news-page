import React from 'react'
import styles from '../styles/eom.module.css'
import Toolbar from '../components/toolbar'


function eom({ employee }) {
    return (
        <div className='page-container'>
            <Toolbar />
            
            <div className={styles.main}>
                <h1>Employee of the Month</h1>

                <div className={styles.employeeOfTheMonth} >
                    <h3>Name: {employee.data.employee_name}</h3>
                    <h3>Age: {employee.data.employee_age}</h3>
                    <p>Salary: {employee.data.employee_salary}</p>
                    
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(`https://dummy.restapiexample.com/api/v1/employee/2`)
    const employee = await apiResponse.json();
    return  {
        props: {
            employee
        }
    }
}

export default eom;
