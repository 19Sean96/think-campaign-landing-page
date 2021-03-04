import '../styles/styles.scss'
import styles from '../styles/Home.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChartBar, faCaretDown, faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

library.add(faChartBar, faCaretDown, faArrowRight, faArrowLeft)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
