// useEffect hook
// you’re telling React to run your “effect” function after flushing changes to the DOM
// By default, React runs the effects after every render
// CLEAN UP: we might want to set up a subscription to some external data source

// With cleanup
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // Clean up the subscription
    subscription.unsubscribe();
  };
});
// Without cleanup
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
// React performs the cleanup when the component unmounts
// Fields = second argument as an array in useEffect
