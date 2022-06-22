import React, { useEffect } from 'react'
import AppHead from '../Components/Shared/AppHead'
import Header from '../Components/Shared/Header'
import Sidebar from '../Components/Shared/Sidebar'
import Prism from 'prismjs'

const Page = (props) => {
    Prism.highlightAll()

    useEffect(() => {
        Prism.highlightAll()
    }, []);

    return (
        <>
            <AppHead seo={props.yoast_meta} pageTitle={props.title} />

            <div className='layout'>
                <Header />
                <div className="def-page container mx-auto px-3 flex flex-row justify-start items-start">
                    <aside>
                        <Sidebar />
                    </aside>
                    <div className="content">
                        <h1>{props.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: props.content }} ></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Page