import React ,{useRef, useEffect}from 'react'

const Map = ({center,zoom,className,style}) => {
    const ref=useRef();
    useEffect(()=>{
        const map=new window.google.maps.Map(ref.current,{
            center:center,
            zoom:zoom
        });
        new window.google.maps.Marker({position:center,map:map});
        
    },[center,zoom])
   return (
        <div ref={ref} className={`map ${className}`} style={style}>
            
        </div>
    )
}

export default Map
