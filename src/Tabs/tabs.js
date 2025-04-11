import React,{useState,useEffect,useRef} from "react";
import "./tabs.css";

const Tabs = ({tabs}) => {
    const [activeIndex,setActiveIndex] = useState(0)
    const tabsRef = useRef([])
    const handleKeyDown = (e) => {
        const count = tabs.length
        let newIndex = activeIndex
        switch(e.key) {
            case 'ArrowRight' :
            newIndex = (activeIndex + 1) % count;
            break;
            case 'ArrowLeft' : 
            newIndex = (activeIndex - 1 + count) % count;
            break;
            case 'Home' : 
            newIndex = 0;
            break;
            case 'End' : 
            newIndex = count - 1;
            break;
            default :
            return;
        }
        e.preventDefault();
        setActiveIndex(newIndex)
        tabsRef.current[newIndex]?.focus()
    }
    return(
        <div className="tabs-container">
            <div  className="tabs-button-container">
            {tabs?.map((tab,index) => {
                return(
                <button
                ref={(el) => (tabsRef.current[index] = el)}
                id={`tab ${index}`}
                key={index}
                role="tab"
                onClick={() => setActiveIndex(index)}
                area-selected = {activeIndex === index}
                tabIndex={activeIndex === index ? 0 : -1}
                className="tabs-button"
                onKeyDown={handleKeyDown}
                >
                    {tab.label}
                </button>
              
                )
            })}
              </div>
              <div>
            {tabs?.map((tab,index) => {
                return(
                <div
                key={index}
                role="tabpanel"
                id={`panel-${index}`}
                aria-labelledby={`tab-${index}`}
                hidden={activeIndex !== index}
                >
                {activeIndex === index && <tab.component/>}
                </div>
                )
            })}
            </div>
        </div>
    )

}
export default Tabs