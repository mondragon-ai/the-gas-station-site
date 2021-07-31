import ReactPageScroller from "react-page-scroller";
import React, { useState } from 'react'
import FirstComponent from '../components/home/FirstComponent'
import SecondComponent from '../components/home/SecondComponent'
import ThirdComponent from '../components/home/ThirdComponent'
import ForthComponent from '../components/home/ForthComponent'

// const goToPage = (pageNumber) => {
//   this.reactPageScroller.goToPage(pageNumber);
// }


export const Home = () => {

    const [currentPage, setPage] = useState(0);

    const handlePageChange = number => {
        setPage(number);
    };

    // console.log( this.reactPageScroller) //<ReactPageScroller/>)
    return (
        <div id="home" className="">
            <section className="home-screen">
                <ReactPageScroller
                    pageOnChange={handlePageChange}
                    containerWidth={window.innerWidth * 1}
                    containerHeight={window.innerHeight * 1}
                    customPageNumber={currentPage}
                >
                    <FirstComponent />
                    <SecondComponent />
                    <ThirdComponent />
                    <ForthComponent />
                </ReactPageScroller>
            </section>
        </div>
    )
}

export default Home;

