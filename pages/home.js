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

    const [selected, setSelected] = React.useState(false);

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
            selected: false
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
                            sliderItems.map(item => <div key={item.id} onClick={() => selectionFunctions(item.id)} className={item.selected ? "slider-item selected-slider" : "slider-item"}>
                                <img src={item.img} />
                                <p>{item.text}</p>
                            </div>)
                        }
                        {/* <div className="slider-item">
                            <img src="assets/images/collection-icons/battlewear.png" />
                            <p>battlewear</p>
                        </div>
                        <div className="slider-item">
                            <img src="assets/images/collection-icons/country.png" />
                            <p>country</p>
                        </div>
                        <div className="slider-item">
                            <img src="assets/images/collection-icons/old.png" />
                            <p>GOLDHEADS</p>
                        </div>
                        <div className="slider-item">
                            <img src="assets/images/collection-icons/women.png" />
                            <p>WOMEN</p>
                        </div>
                        <div className="slider-item">
                            <img src="assets/images/collection-icons/battlewear.png" />
                            <p>battlewear</p>
                        </div>
                        <div className="slider-item">
                            <img src="assets/images/collection-icons/country.png" />
                            <p>country</p>
                        </div> */}
                    </Slider>
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