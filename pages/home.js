import Layout from "@/components/layout/Layout"
// import Action2 from "@/components/sections/Action2"
// import CreateSell2 from "@/components/sections/CreateSell2"
// import DiscoverItem2 from "@/components/sections/DiscoverItem2"
// import FeaturedItem2 from "@/components/sections/FeaturedItem2"
// import FlatTitle2 from "@/components/sections/FlatTitle2"
// import Seller2 from "@/components/sections/Seller2"
// import Seller3 from "@/components/sections/Seller3"
// import TopCollections2 from "@/components/sections/TopCollections2"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {

    const [sliderItems, setSliderItems] = React.useState([
        {
            id: 0,
            img: "assets/images/collection-icons/battlewear.png",
            text: "battlewear",
            selected: false
        },
        {
            id: 1,
            img: "assets/images/collection-icons/country.png",
            text: "country",
            selected: true
        },
        {
            id: 2,
            img: "assets/images/collection-icons/old.png",
            text: "GOLDHEADS",
            selected: false
        },
        {
            id: 3,
            img: "assets/images/collection-icons/women.png",
            text: "women",
            selected: false
        },
        {
            id: 4,
            img: "assets/images/collection-icons/battlewear.png",
            text: "battlewear",
            selected: false
        },
        {
            id: 5,
            img: "assets/images/collection-icons/country.png",
            text: "country",
            selected: false
        }
    ]);

    const [selected, setSelected] = React.useState(sliderItems[1]);

    const selectionFunctions = (id) => {
        let items = [...sliderItems]

        items.map(item => {
            id === item.id ? item.selected = true : item.selected = false
        })

        console.log(items)
        setSliderItems([...items])
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <div className="collection-slider">
                    <Slider {...settings}>
                        {
                            sliderItems.map(item => <div key={item.id} onClick={() => {
                                setSelected(item)
                                selectionFunctions(item.id)
                            }} className={item.selected ? "slider-item selected-slider" : "slider-item"}>
                                <img src={item.img} />
                                <p>{item.text}</p>
                            </div>)
                        }
                    </Slider>
                    <div className="collection-cover">
                        <div className="row">
                            <div className="nftdetails">
                                <img className="collection-avatar" src={selected.img} alt="battlewear_tokens" />
                                <div class="details">
                                    <p className="collection-name">{selected.text}</p>
                                    <div className="collection"><img src="assets/images/collectioni-icon.png" alt="collection-icons" /><p>SOLDIER COLLECTION</p></div>
                                </div>
                            </div>
                            <div className="nft-rates">
                                <div>
                                    <p className="price">2.00</p>
                                    <p className="action-text">BUY NOW</p>
                                </div>
                                <div>
                                    <p className="price">1.50</p>
                                    <p className="action-text">SELL NOW</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <p className="value">350/4,418 (7.83%)</p>
                                <p className="label">LISTED/SUPPLY</p>
                            </div>
                            <div>
                                <p className="value">32</p>
                                <p className="label">VOLUME (24H)</p>
                            </div>
                            <div>
                                <p className="value">163,942</p>
                                <p className="label">VOLUME (ALL)</p>
                            </div>
                            <div>
                                <p className="value">6</p>
                                <p className="label">SALES (24H)</p>
                            </div>
                            <div>
                                <p className="value">-19.25%</p>
                                <p className="label">PRICE Δ (24H)</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <FlatTitle2 />
                <Seller2 />
                <FeaturedItem2 />
                <CreateSell2 />
                <Seller3 />
                <TopCollections2 />
                <Action2 />
                <DiscoverItem2 /> */}
            </Layout>
        </>
    )
}