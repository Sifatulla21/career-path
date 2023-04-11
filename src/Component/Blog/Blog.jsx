import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className="blog-container">
            <h1>This Is Blog</h1>
            <div className="qna">
            <h1>1. When should we use context api?</h1>
            <p><strong>Answer: </strong>When we have a data that needs to be accessed by multiple components at different levels of the component tree, but we don't want to pass it down through each component as a prop we use context api.</p>
            <h1>2. What is react custom hook?</h1>
            <p><strong>Answer: </strong>A React custom hook is a function that lets us pull code from one component and reuse it in another. Custom hooks are made by writing a function that calls one or more built-in hooks and produces a value or function that other components can utilize.</p>
            <h1>3. What is useRef?</h1>
            <p><strong>Answer: </strong>useRef a React custom hook is a function that lets us pull code from one component and reuse it in another. Custom hooks are made by writing a function that calls one or more built-in hooks and produces a value or function that other components can utilize.</p>
            <h1>4. What is useMemo?</h1>
            <p><strong>Answer: </strong>useMemo is a React Hook that may be used to improve the speed of functional components by memoizing the outcome of a calculation.
            As a functional component renders, it executes all of its logic, including any computations or other costly activities. In some circumstances, this might cause unneeded recalculations and slow down the component's performance.</p>
            </div>
        </div>
    );
};

export default Blog;