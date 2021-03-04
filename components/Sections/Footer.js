import Intersection3 from '../Intersections/Footer'
import Container from '../Container'
import ThinkLogo from '../Bits/ThinkLogo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = props => {

    return (
        <footer className="footer">
            <Container>
                <div className="footer--content">
                    <div className="footer--content--section footer__left">
                        <div className="footer--logo__wrapper">
                            <ThinkLogo color="#e3e3e3" />
                        </div>
                        <p>Think is a marketing print house & design studio based in Tempe, Arizona</p>
                        <div className="footer--social__wrapper">
                            <div className="footer--social__facebook footer--social">
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </div>
                            <div className="footer--social__instagram footer--social">                                
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </div>

                        </div>
                        <p className="footer--copyright">©2021 Think Graphics and Printing Solutions</p>
                    </div>
                    <div className="footer--content--section footer__center">
                        <h6 className="uppercase bold">services</h6>
                        <h6 className="uppercase">design</h6>
                        <h6 className="uppercase">apparel</h6>
                        <h6 className="uppercase">print</h6>
                        <h6 className="uppercase">campaigns</h6>
                        <div className="footer--logo__third-party">
                            <img src="/local-first-arizona-logo.jpg" alt="Logo For Local First Arizona"/>
                        </div>

                    </div>
                    <div className="footer--content--section footer__right">
                        <h6 className="uppercase bold">resources</h6>
                        <h6 className="uppercase">faq</h6>
                        <h6 className="uppercase">about</h6>
                        <h6 className="uppercase">contact</h6>
                        <h6 className="uppercase">careers</h6>

                    </div>
                </div>
            </Container>
            <Intersection3 />
        </footer>
    )
}

export default Footer