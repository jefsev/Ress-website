import React from 'react'
import AppHead from '../Components/Shared/AppHead'
import Header from '../Components/Shared/Header'
import Footer from '../Components/Shared/Footer'
import Hero from '../Components/Hero'
import Sidebar from '../Components/Shared/Sidebar'

const Index = (props) => {
    console.log(props)
    return (
        <>
            <AppHead seo={props.yoast_meta} pageTitle={props.title} />

            <div className='layout'>
                <Header />
                <Hero acf={props.acf} />

                <div className="def-page container mx-auto px-3 flex flex-row justify-start items-start">
                    <aside>
                        <Sidebar />
                    </aside>
                    <div className="content">
                        <div dangerouslySetInnerHTML={{ __html: props.content }} ></div>
                    </div>
                </div>

                <Footer />
            </div>

        </>
    )
}

export default Index