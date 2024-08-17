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
import Link from "next/link";
import Countdown from "@/components/elements/Countdown";
import MultiRangeSlider from "../components/elements/CustomComponents/CustomRangeController/MultiRangeSlider"
import SingleRangeSlider from "../components/elements/CustomComponents/CustomRangeController/SingleRangeSlider"

const currentTime = new Date()

export default function Home() {
    const [isBidModal, setBidModal] = React.useState(false)

    const [allNft, setAllNft] = React.useState(false)
    const [forSale, setForSale] = React.useState(false)
    const [favourites, setFavourites] = React.useState(false)

    const handleBidModal = () => setBidModal(!isBidModal)

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


    const [traitSlider, setTraitSlider] = React.useState(0);

    const onTraitSlide = (event) => {
        setTraitSlider(event.target.value);
    }

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

                {/* <div className="collection">
                    <div className="filters">

                    </div>
                    <div className="collection-images">

                    </div>
                </div> */}

                <div className="tf-section-5 artwork loadmore-12-item-1 fluid-content">
                    <div className="row">
                        <div className="col-md-3">
                            <p>FILTERS</p>
                            <div className="widget-category-checkbox style-1 mb-30">
                                {/* <h5 className="active">Status</h5> */}
                                {/* <input type="number" id="tentacles" name="tentacles" min="0" max="100" step={0.1} /> */}

                                <div className="content-wg-category-checkbox">
                                    <div onClick={() => setAllNft(!allNft)} className={allNft ? "selection selected" : "selection"}>
                                        <img src="assets/icon/allnfts.png" alt='allnfts' />
                                        <p>ALL NFTS</p>
                                    </div>
                                    <div onClick={() => setForSale(!forSale)} className={forSale ? "selection selected" : "selection"}>
                                        <img src="assets/icon/forsale.png" alt='allnfts' />
                                        <p>FOR SALE</p>
                                    </div>
                                    <div onClick={() => setFavourites(!favourites)} className={favourites ? "selection selected" : "selection"}>
                                        <img src="assets/icon/favourites.png" alt='allnfts' />
                                        <p>FAVOURITES</p>
                                    </div>
                                </div>
                                {/* <div class="sliders_control">
                                        <input id="fromSlider" type="range" value="10" min="0" max="100" />
                                        <input id="toSlider" type="range" value="40" min="0" max="100" />
                                    </div> */}
                                <br />
                                <br />

                                <p className="secondary-head">PRICE</p>
                                <MultiRangeSlider />
                                <br />

                                <p className="secondary-head">RARITY</p>
                                <MultiRangeSlider />

                                <div className="rarity-tags">
                                    <span className="tag-BA8AFF">LEGENDARY (5%)</span>
                                    <span className="tag-FF8AAD">RARE (25%)</span>
                                    <span className="tag-8EE3FB">UNCOMMON (50%)</span>
                                    <span className="tag-BFC4CA">COMMON (100%)</span>
                                </div>

                                <p className="secondary-head">TRAIT COUNT</p>
                                {/* <SingleRangeSlider min={0} max={10} /> */}
                                <input type="range" min="0" max="9" onChange={onTraitSlide} value={traitSlider} className="trait-slider" id="myRange" />
                                <div className="trait-slider-values">
                                    <span>0</span>
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                </div>
                            </div>
                            <div className="widget-category-checkbox style-1 mb-30">
                                <h5 className="active">Collection</h5>
                                <div className="content-wg-category-checkbox">
                                    <form action="#">
                                        <label>Digital Art
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label><br />
                                        <label>Gaming
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label><br />
                                        <label>Gaming
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label><br />
                                        <label>Music
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label><br />
                                        <label>Photography
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label><br />
                                        <label>Typo
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label><br />
                                        <label>Crypto
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label><br />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div data-wow-delay="0s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                    <div className="tf-card-box style-4">
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="assets/images/collection/1.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <div className="flex items-center justify-between diamonds">
                                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.46329 0L0 2.38729C2.1667 5.88728 4.3334 9.38729 6.5001 12.8873L13 2.38729L10.5369 0H2.46329Z" fill="black" />
                                                </svg>
                                                <span>2596</span>
                                            </div>
                                            <div>
                                                <h6 className="price gem">#424</h6>
                                            </div>
                                        </div>
                                        <div className="meta-info flex items-center justify-between">
                                            <div>
                                                <h6 className="price gem"><img src='/assets/icon/nftcurrency.png' />0,34</h6>
                                            </div>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span> BUY</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                    <div className="tf-card-box style-4">
                                        <div className="author flex items-center">
                                            <div className="avatar">
                                                <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Created by:</span>
                                                <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="assets/images/collection/2.png" alt="" />
                                            </Link>
                                            <span className="wishlist-button icon-heart" />
                                            <div className="featured-countdown">
                                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                        <div className="meta-info flex items-center justify-between">
                                            <div>
                                                <span className="text-bid">Current Bid</span>
                                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                            </div>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                    <div className="tf-card-box style-4">
                                        <div className="author flex items-center">
                                            <div className="avatar">
                                                <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Created by:</span>
                                                <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="assets/images/collection/3.png" alt="" />
                                            </Link>
                                            <span className="wishlist-button icon-heart" />
                                            <div className="featured-countdown">
                                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                        <div className="meta-info flex items-center justify-between">
                                            <div>
                                                <span className="text-bid">Current Bid</span>
                                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                            </div>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                    <div className="tf-card-box style-4">
                                        <div className="author flex items-center">
                                            <div className="avatar">
                                                <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Created by:</span>
                                                <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="assets/images/collection/3.png" alt="" />
                                            </Link>
                                            <span className="wishlist-button icon-heart" />
                                            <div className="featured-countdown">
                                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                        <div className="meta-info flex items-center justify-between">
                                            <div>
                                                <span className="text-bid">Current Bid</span>
                                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                            </div>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                    <div className="tf-card-box style-4">
                                        <div className="author flex items-center">
                                            <div className="avatar">
                                                <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Created by:</span>
                                                <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="assets/images/collection/2.png" alt="" />
                                            </Link>
                                            <span className="wishlist-button icon-heart" />
                                            <div className="featured-countdown">
                                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                        <div className="meta-info flex items-center justify-between">
                                            <div>
                                                <span className="text-bid">Current Bid</span>
                                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                            </div>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                    <div className="tf-card-box style-4">
                                        <div className="author flex items-center">
                                            <div className="avatar">
                                                <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Created by:</span>
                                                <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="assets/images/collection/1.png" alt="" />
                                            </Link>
                                            <span className="wishlist-button icon-heart" />
                                            <div className="featured-countdown">
                                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                        <div className="meta-info flex items-center justify-between">
                                            <div>
                                                <span className="text-bid">Current Bid</span>
                                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                            </div>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                    <div className="tf-card-box style-4">
                                        <div className="author flex items-center">
                                            <div className="avatar">
                                                <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Created by:</span>
                                                <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="assets/images/collection/1.png" alt="" />
                                            </Link>
                                            <span className="wishlist-button icon-heart" />
                                            <div className="featured-countdown">
                                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                        <div className="meta-info flex items-center justify-between">
                                            <div>
                                                <span className="text-bid">Current Bid</span>
                                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                            </div>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                    <div className="tf-card-box style-4">
                                        <div className="author flex items-center">
                                            <div className="avatar">
                                                <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Created by:</span>
                                                <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="assets/images/collection/2.png" alt="" />
                                            </Link>
                                            <span className="wishlist-button icon-heart" />
                                            <div className="featured-countdown">
                                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                        <div className="meta-info flex items-center justify-between">
                                            <div>
                                                <span className="text-bid">Current Bid</span>
                                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                            </div>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                    <div className="tf-card-box style-4">
                                        <div className="author flex items-center">
                                            <div className="avatar">
                                                <img src="assets/images/collection/3.png" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Created by:</span>
                                                <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="assets/images/collection/3.png" alt="" />
                                            </Link>
                                            <span className="wishlist-button icon-heart" />
                                            <div className="featured-countdown">
                                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                        <div className="meta-info flex items-center justify-between">
                                            <div>
                                                <span className="text-bid">Current Bid</span>
                                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                            </div>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                    <div className="tf-card-box style-4">
                                        <div className="author flex items-center">
                                            <div className="avatar">
                                                <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Created by:</span>
                                                <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="assets/images/collection/1.png" alt="" />
                                            </Link>
                                            <span className="wishlist-button icon-heart" />
                                            <div className="featured-countdown">
                                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                        <div className="meta-info flex items-center justify-between">
                                            <div>
                                                <span className="text-bid">Current Bid</span>
                                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                            </div>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                    <div className="tf-card-box style-4">
                                        <div className="author flex items-center">
                                            <div className="avatar">
                                                <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Created by:</span>
                                                <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="assets/images/collection/2.png" alt="" />
                                            </Link>
                                            <span className="wishlist-button icon-heart" />
                                            <div className="featured-countdown">
                                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                        <div className="meta-info flex items-center justify-between">
                                            <div>
                                                <span className="text-bid">Current Bid</span>
                                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                            </div>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                    <div className="tf-card-box style-4">
                                        <div className="author flex items-center">
                                            <div className="avatar">
                                                <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Created by:</span>
                                                <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="assets/images/collection/3.png" alt="" />
                                            </Link>
                                            <span className="wishlist-button icon-heart" />
                                            <div className="featured-countdown">
                                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                        <div className="meta-info flex items-center justify-between">
                                            <div>
                                                <span className="text-bid">Current Bid</span>
                                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                            </div>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
            </Layout >
        </>
    )
}