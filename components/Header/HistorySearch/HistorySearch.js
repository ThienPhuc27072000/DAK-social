import Styles from './HistorySearch.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Dak from "../../../public/images/avatar.jpg";


export default function HistorySearch() {
    return (
        <>
        <div className={Styles.search__history}>
            <h3 className={Styles.search__history__heading}>Lịch sử tìm kiếm</h3>
            <ul className={Styles.search__history__list}>
                <li className={Styles.search__history__item}>
                    <Link href="/">
                        <a className={Styles.search__history__link}>
                            <div className={Styles.search__history__avatar}>
                                <Image src={Dak} alt="Avatar"/>
                            </div>
                            <h3 className={Styles.search__history__name}>Dak website</h3>
                            <span className={Styles.search__history__delete}>x</span>
                        </a>
                    </Link>
                </li>
                <li className={Styles.search__history__item}>
                    <Link href="/">
                        <a className={Styles.search__history__link}>
                            <div className={Styles.search__history__avatar}>
                                <Image src={Dak} alt="Avatar"/>
                            </div>
                            <h3 className={Styles.search__history__name}>Dak website</h3>
                            <span className={Styles.search__history__delete}>x</span>
                        </a>
                    </Link>
                </li>
                <li className={Styles.search__history__item}>
                    <Link href="/">
                        <a className={Styles.search__history__link}>
                            <div className={Styles.search__history__avatar}>
                                <Image src={Dak} alt="Avatar"/>
                            </div>
                            <h3 className={Styles.search__history__name}>Dak website</h3>
                            <span className={Styles.search__history__delete}>x</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
        </>
    ) 
}