const IMPORTANT =
  "Don’t call Hooks inside loops, conditions, or nested functions. !!!!";

// Instead, always use Hooks at the top level of your React function, before any early returns.
// By following this rule, you ensure that Hooks are called in the same order each time a component renders
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("banana");
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// useState hook
// useState adds local state to the functional component it is called in
// useState returns a pair: the current state value and a function that lets you update it.
// You can call this function from an event handler or somewhere else
// const [name, setName] = useState(initialValue);
// You can use the State Hook more than once in a single component:

