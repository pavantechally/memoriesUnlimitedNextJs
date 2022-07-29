import styles from'./index.module.css'
//import { BsGrid3X3GapFill } from 'react-icons/bs';




export default function Navbar() {
    return (
        
        <div className={styles.navBarMainContainer} >
            <h1 className={styles.websiteHeading} >
                Memories Unlimited
            </h1>
            <div className={styles.tabsContainer} >
                <h1 className={styles.tabTittles} >Experiences</h1>
                <h1 className={styles.tabTittles} >Gifts</h1>
                <h1 className={styles.tabTittles} >Weddings</h1>
                <h1 className={styles.tabTittles} >Events</h1>
            </div>

            <input className={styles.searchBox}  type="text" placeholder=' Search'/>

            <div className={styles.iconsBox} >
                <div className={styles.iconBox} >
                    <h1 className={styles.iconTittle} > wishList</h1>
                </div>
                <div className={styles.iconBox} >
                    <h1 className={styles.iconTittle} > Your Cart</h1>
                </div>
                <div className={styles.iconBox} >
                    <h1 className={styles.iconTittle} > Profile</h1>
                </div>
            </div>
            <div className={styles.phoneNumberBox} >
                
            </div>
        </div>

    )

}