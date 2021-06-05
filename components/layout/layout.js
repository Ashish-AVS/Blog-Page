import React from 'react'
import MainNavigation from './main-navigation'
import Footer from './Footer'
export default function Layout(props) {
    return (
        <>
            <MainNavigation />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}
