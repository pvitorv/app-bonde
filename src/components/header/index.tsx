import Link from "next/link";
import styles from "./home.module.css"


export function Header (){
    return(
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <h1 className={styles.logo}>Bonde<span>  +</span></h1>
                    </Link>
                    <Link href="/dashboard" className= {styles.link} >Meu Painel</Link>
                </nav> 
                <button className= {styles.loginButton} >Acessar</button>
            </section>
        </header>
    );
}

