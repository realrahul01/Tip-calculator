/* eslint-disable react/prop-types */
import styles from './Output.module.css'
// eslint-disable-next-line react/prop-types
const Output =({list,calculateTipHandler,customer,add})=>{
    // eslint-disable-next-line react/prop-types
    const itemList = list.map((e,index)=>{
        return <li key={index}>{e}</li>
    })

const clickHandler = ()=>{
    calculateTipHandler()
}
    return (
        <>
        <div className={styles.output}>
            <h2>Customer List</h2>
            <hr className={styles.hr}/>
            <ul className={styles.item}>
                {itemList}
            </ul>
        </div>
        <div className={styles.center}>
            <button onClick={clickHandler} className={styles.btn}>Calculate Tip & Customer</button>
        </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.table}>Total Customer</th>
                        <th>Total Tip</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.table}>{customer}</td>
                        <td>{add}</td>
                    </tr>
                 </tbody>
            </table>
        </>
        
    )
}
export default Output