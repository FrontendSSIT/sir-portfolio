
import { Carousel, Container } from 'react-bootstrap'

import styles from '../../../styles/Header.module.scss'

export const Header = () => {
    return (
        <section className={styles.headerBg}>
         <Container>
         <Carousel>
                <Carousel.Item>
                   <h2>Something</h2>
                </Carousel.Item>

                <Carousel.Item>
                  <h2>ing write</h2>
                </Carousel.Item>
            </Carousel>
            <button>About</button>
            <button>Contact</button>
         </Container>
        </section>
    )
}
