import ReactPageScroller from "react-page-scroller";
import React, { useEffect, useState } from 'react'
import FirstComponent from '../components/home/FirstComponent'
import SecondComponent from '../components/home/SecondComponent'
import ThirdComponent from '../components/home/ThirdComponent'
import ForthComponent from '../components/home/ForthComponent'
import Loading from "./Loading";

// const goToPage = (pageNumber) => {
//   this.reactPageScroller.goToPage(pageNumber);
// }


export const Home = ({changePath}) => {

    changePath("/home")

    var [currentPage, setPage] = useState(0);
    var [isLoading, load] = useState(true)

    const handlePageChange = number => {
        setPage(number);
    };

    // Using effect to setttle the laoding state. However, looking to delete
    useEffect(() => {
        
        setTimeout(() => {
        load(false);
        }, 1500);
        
        load(false);
        
        return () => {}
    }, []);

    if (isLoading) {
        return (<Loading />)
    } else {
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
}

export default Home;

