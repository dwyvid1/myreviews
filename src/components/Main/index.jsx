import { Container, Reviews } from './style'

export function Main() {
    return (
        <Container>
            <Reviews>
                <h2>Principais análises</h2>

                <div className="reviews-container">

                    <div className="tlou1">
                        <a href="#">
                            <h3>The Last Of Us: Remastered</h3>

                            <img src="https://s2.glbimg.com/IhjWbsCX3JVRBKirlqTjvRwWPyo=/850x446/s2.glbimg.com/5vfX20b1F1XVQoXqZjJEmzn_N5I=/695x0/s.glbimg.com/po/tt2/f/original/2014/08/15/the-last-of-us-remastered-esta-disponivel-para-playstation-4.jpg" alt="The Last Of Us: Remastered"/>
                        </a>
                    </div>

                    <div className="tlou2">
                        <a href="#">
                            <h3>The Last Of Us: Part II</h3>

                            <img src="https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-ii-logo-wallpaper-ipad-mini-image-block-01-ps4-us-04oct19?$native$" alt="The Last Of Us: Part 2"/>
                        </a>
                    </div>

                    <div className="uncharted4">
                        <a href="#">
                            <h3>Uncharted 4: A Thief's End</h3>

                            <img src="https://i.pinimg.com/564x/bf/4e/a4/bf4ea46da43140ee5bf75c85da3ce74e.jpg" alt="Uncharted 4: A Thief's End"/>
                        </a>
                    </div>


                    <div className="lostlegacy">
                        <a href="#">
                            <h3>Uncharted : Lost Legacy</h3>

                            <img src="https://image.api.playstation.com/vulcan/img/rnd/202010/3018/yb6qDwSOrKvmHHlgOWdsLnIy.png"/>
                        </a>
                    </div>

                </div>
            </Reviews>
        </Container>
    )
}