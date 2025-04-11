import React, { Component } from "react";
import Tabs from "./tabs.js"

const Tab1 = React.lazy(() => import('./tabOne.js'))
const Tab2 = React.lazy(() => import('./tabTwo.js'))
const Tab3 = React.lazy(() => import('./tabThree.js'))

const RenderTabs = () => {
    const tabsList = [
        {
            label: "Tab1",
            component: () => (
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Tab1/>
                </React.Suspense>
            )
        },
        {
            label: "Tab2",
            component: () => (
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Tab2/>
                </React.Suspense>
            )
        },
        {
            label: "Tab3",
            component: () => (
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Tab3/>
                </React.Suspense>
            )
        }
    ]
    return (
        <div>
            <Tabs tabs={tabsList}/>
        </div>
    )

}
export default RenderTabs