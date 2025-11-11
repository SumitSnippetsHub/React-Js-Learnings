## useRef
What is useRef?
In React, useRef is a hook that provides a way to create a reference to a value or a DOM element that persists across renders but does not trigger a re-render when the value changes.
Key Characteristics of useRef:
Persistent Across Renders: The value stored in useRef persists between component re-renders. This means the value of a ref does not get reset when the component re-renders, unlike regular variables.
No Re-Renders on Change: Changing the value of a ref (ref.current) does not cause a component to re-render. This is different from state (useState), which triggers a re-render when updated.

## 1. Focussing on an input box
import React, { useRef } from 'react';

function FocusInput() {
  // Step 1: Create a ref to store the input element
  const inputRef = useRef(null);

  // Step 2: Define the function to focus the input
  const handleFocus = () => {
    // Access the DOM node and call the focus method
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Step 3: Attach the ref to the input element */}
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}

export default FocusInput;
