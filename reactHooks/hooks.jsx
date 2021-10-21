// Don’t call Hooks inside loops, conditions, or nested functions.
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

// useEffect hook
// you’re telling React to run your “effect” function after flushing changes to the DOM
// By default, React runs the effects after every render
// CLEAN UP: we might want to set up a subscription to some external data source

// With cleanup
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [Field]);
// Without cleanup
useEffect(() => {
  document.title = `You clicked ${count} times`;
});
// React performs the cleanup when the component unmounts
// Fields = second argument as an array in useEffect
