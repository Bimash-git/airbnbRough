1. What does prop helps us to accomplish?
Ans: makes a component more useable

2. How do you pass prop into a component?
Ans: <MyQwesomeComp src="???"/> 

3. Can i pass a custom prop (e.g. `blahblah={true}`) to a native DOM Element? (e.g. <div blahblah={true}>) why or why not?
Ans: NO, because the JSX we use to describe native DOM element will be turned into REAL DOM element by React. And real DOM Element only have the properties/attributes specified in the specification. (which doesn't include properties like `blahblah`)

4. How do i recieve props in a component?
function Navbar() {
    return (
        <header>
        ...
        <header/>
    )
}
Ans: 
function Navbar(props) {
    console.log()
    return (
        <header>

        <header/>
    )
}

5. What data type is `props` when the component receives it?
Ans: An object

<!-- Map -->

1. What does the `.map()` array for in react?
Ans: returns a new array. whatever gets returned from the callback function provided is placed at the same index in the new array. usually we take the items for the original array and modify them in some way.

2. What does we usually use `.map()` for in React?
Ans: converts an array of raw data into an array of jsx elements that can be displayed on the page

3. Why is using `.map()` better than just creating the component manually by typing them out?
Ans: it makes our code more "self-sustaining" - not requiring additional changes whenver the data change