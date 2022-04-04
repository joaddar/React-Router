import React from 'react';

const Blogs = () => {
    return (
        <div className=' mx-52'>
            <h1 className=' text-2xl'>CONTEXT </h1>
            <p className=' text-xl'>1. Kono component e props er madhome data pass carai ek component theke onno component e data transfer kora jai.</p>
            <p className=' text-xl'>2. components jodi onek hoi ektar vet arekta,arektar vetor arekta , tahole conext use korle shorashori data transfer hoi,prottek component er modde debar proyojon pore nah</p>
            <p>3. context use korar jonno ptrothome createContext() import kore nite hoi,
                then context.Provider value (ekhane ja object pthabo tai dite hoi),
                porobortite jekhane use korbo sekhane useContext(context) korlei hoiya jai
            </p>
            <p>4. context use korle jhamela kom hoi</p>
        </div>
    );
};

export default Blogs;