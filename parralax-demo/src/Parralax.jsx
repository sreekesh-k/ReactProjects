import React, { useEffect } from 'react';
import Parallax from 'parallax-js';

function Parralax({ children }){
    useEffect(() => {
        const scene = document.getElementById('scene');
        new Parallax(scene);
    }, [])
    return (
        <section id="scene" className="relative w-full h-full h-[100svh] max-h-[100svh] parallax-container overflow-hidden">
            {children}
        </section>
    );
}

export default Parralax