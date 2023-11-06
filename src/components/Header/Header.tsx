import styles from './HeaderStyles.module.scss';

interface IHeader {
 page: string;
}

export const Header = ({page} : IHeader) => {

    return (
        <header className={styles.component}>
            <span className={styles.title}>
                VILABLOG
            </span>
            <div className={styles.links}>
                <a href='#' className={ page === "Blog" && styles.ativo }>Blog</a>
                <a href='https://github.com/Shadowtampa/' className={ page === "Github" && styles.ativo }>Github</a>
            </div>
        </header>
    )
}
