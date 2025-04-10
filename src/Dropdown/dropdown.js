import {useState,useEffect,useRef} from 'react';
import './dropdown.css'

const Dropdown = ({options,onChange}) => {
    const [isOpen,setIsOpen] = useState(false)
    const [selectedOptions,setSelectedOptions] = useState([])
    const [highlightedIndex,setHighLightedIndex] = useState(-1)

    const dropdownRef = useRef(null)
    const toggleDropdown = () => {
        setIsOpen((prev) =>  !prev)
        setHighLightedIndex(-1)
    }
    const handleSelect = (option) => {
        if(selectedOptions.includes(option)){
            setSelectedOptions(selectedOptions?.filter((item) => item !== option))
        }else {
            setSelectedOptions([...selectedOptions,option])
        }
        onChange(selectedOptions)
    }
    const handleKeyDown = (e) => {
        if(e.key === "ArrowDown"){
            setHighLightedIndex((prev) => (prev + 1) % options.length);
        }else if(e.key === "ArrowUp"){
            setHighLightedIndex((prev) => (prev - 1 + options.length) % options.length);
        } else if (e.key === 'Enter' && highlightedIndex !== -1) {
            handleSelect(options[highlightedIndex]);
          }
    }
    const handleClickOutside = (e) => {
        if(   dropdownRef.current && !dropdownRef.current.contains(e.target) ){
            setIsOpen(false)
        }
    }
    useEffect(() => {
  
        document.addEventListener("mousedown",handleClickOutside)
        return () => {
            document.removeEventListener("mousedown",handleClickOutside)
        }
    },[])
    return(
       <div ref={dropdownRef} className='dropdown' onKeyDown={handleKeyDown} tabIndex={0}>
        <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOptions?.length === 0 ? 'Select Options' : selectedOptions.join(', ')}
        </div>
        {isOpen && (
            <div className='dropdown-list'>
                {options?.map((option,index) => (
                    <div
                     key={index}  
                     className={`dropdown-item ${selectedOptions.includes(option) ? 'selected' : ""} ${index === highlightedIndex ? 'highlighted' : ''}`}
                     onClick={()=> handleSelect(option)}
                    >
                     {option}
                    </div>
                ))}
           </div>
        )}
       </div> 
    )
}
export default Dropdown;