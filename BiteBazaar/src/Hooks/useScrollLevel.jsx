import { useLayoutEffect, useState } from "react";

export default function useScrollLevel() {

    const [scrollY, setScrollY] = useState(0)

    const handleScroll = () => {
        setScrollY(window.scrollY);
    }

    useLayoutEffect(()=> {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => {})
        }
    },[])
    
    return scrollY;
}
