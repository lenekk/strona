import img from './img/garlic-2556022_1920.jpg'

const Footer = () => {
    const bgc = img;
    return (
        <>
            <h2 className="mainText">Lokalizacje</h2>
            <div className="underline"></div>

            <div className="obrazek3" style={{backgroundImage: `url(${bgc})`, backgroundPosition:'top'}}>
                <div className="cien3"></div>
                <div className="container">
                    <div className="row text-center text-light px-3">
                        <div className="col-sm-6 col-lg-4 my-5">
                        <h3 style={{textDecoration:'underline', textDecorationColor:'#17a2b8'}}>Siedziba główna</h3>
                        <p>Ozorków ul.Podleśna 17</p>
                        <p><i className="fas fa-at"></i> ozorkow@restauracja.pl</p>
                        <p><i className="fas fa-phone-alt"></i> 123-456-789</p>
                        </div>

                        <div className="col-sm-6 col-lg-4 my-5">
                        <h3 style={{textDecoration:'underline', textDecorationColor:'#17a2b8'}}>Miasto Warszawa</h3>
                        <p>Warszawa ul.Warszawska 17</p>
                        <p><i className="fas fa-at"></i> warszawa@restauracja.pl</p>
                        <p><i className="fas fa-phone-alt"></i> 123-456-789</p>
                        </div>

                        <div className="col-sm-6 col-lg-4 my-5">
                        <h3 style={{textDecoration:'underline', textDecorationColor:'#17a2b8'}}>Miasto Łódź</h3>
                        <p>Łódź ul.Łódzka 46</p>
                        <p><i className="fas fa-at"></i> lodz@restauracja.pl</p>
                        <p><i className="fas fa-phone-alt"></i> 123-456-789</p>
                        </div>

                        <div className="col-sm-6 col-lg-4 my-5">
                        <h3 style={{textDecoration:'underline', textDecorationColor:'#17a2b8'}}>Miasto Kraków</h3>
                        <p>Kraków ul.Krakowska 8</p>
                        <p><i className="fas fa-at"></i> krakow@restauracja.pl</p>
                        <p><i className="fas fa-phone-alt"></i> 123-456-789</p>
                        </div>

                        <div className="col-sm-6 col-lg-4 my-5">
                        <h3 style={{textDecoration:'underline', textDecorationColor:'#17a2b8'}}>Miasto Wrocław</h3>
                        <p>Wrocław ul.Wrocławska 25</p>
                        <p><i className="fas fa-at"></i> wroclaw@restauracja.pl</p>
                        <p><i className="fas fa-phone-alt"></i> 123-456-789</p>
                        </div>

                        <div className="col-sm-6 col-lg-4 my-5">
                        <h3 style={{textDecoration:'underline', textDecorationColor:'#17a2b8'}}>Miasto Gdańsk</h3>
                        <p>Gdańsk ul.Gdańska 27</p>
                        <p><i className="fas fa-at"></i> gdansk@restauracja.pl</p>
                        <p><i className="fas fa-phone-alt"></i> 123-456-789</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stopka"><strong>Copyright</strong> <i className="far fa-registered "></i> <strong>2021 WebsiteStudio.</strong></div>
        </>
    );
}

export default Footer;