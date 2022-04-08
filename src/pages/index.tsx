import { Title } from '../components/TitlePage'

import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Title title="Template nextJs/Typescript" />
     <section className={styles.s_hero_main}>
        <div className={styles.s_hero_main_icon}>
          <img src="/images/logo.svg" alt="Logo Codeboost" />
        </div>
        <h1>Template nextJs/Typescript <span>Atualizado 08/04/22</span></h1>
     </section>
    </>
  )
}
