import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='text'>
            <h1>FAQ</h1>
            <div className='faq'>
                <h2>1.How does react works?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code. </p>
                <h2>2.What is the difference between props and state?<br /></h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. Props are read-only.State is both read and write. Props is Immutable (cannot be modified). State is Mutable ( can be modified).</p>
                <h2>3.What does useEffect do without data load?</h2>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are
                    directly updating  the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>

        </div>
    );
};

export default Faq;