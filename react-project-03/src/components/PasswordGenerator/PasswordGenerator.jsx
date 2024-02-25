import React, { useCallback, useEffect, useRef, useState } from 'react';

// Functional component called PasswordGenerator
const PasswordGenerator = () => {
    // Define state variables using the useState hook
    const [length, setLength] = useState(8); // State for password length
    const [numberAllowed, setNumberAllowed] = useState(false); // State for allowing numbers in password
    const [charAllowed, setCharAllowed] = useState(false); // State for allowing special characters in password
    const [password, setPassword] = useState(""); // State for generated password

    // useRef Hook to reference the password input element
    const passwordRef = useRef(null);

    // Function to generate a random password
    const passwordGenerator = useCallback(() => {
        let pass = ""; // Initialize an empty string for the password
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Define a string containing upper and lower case alphabets
        if (numberAllowed) str += "0123456789"; // Add numbers to the string if allowed
        if (charAllowed) str += "!@#$%^&*()_+-= {}[]|\:;'<>,.?/~`"; // Add special characters to the string if allowed
        for (let i = 1; i <= length; i++) { // Loop to generate password characters
            let char = Math.floor(Math.random() * str.length); // Generate a random index within the string length
            pass += str.charAt(char); // Append the character at the generated index to the password
        }
        setPassword(pass); // Update the password state with the generated password
    }, [length, numberAllowed, charAllowed, setPassword]); // Dependency array for the useCallback hook

    // Function to copy the generated password to clipboard
    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select(); // Select the password input element
        window.navigator.clipboard.writeText(password); // Copy the password to clipboard
    }, [password]); // Dependency array for the useCallback hook

    // Effect hook to generate a new password whenever length or allowed characters change
    useEffect(() => {
        passwordGenerator(); // Call the passwordGenerator function
    }, [length, numberAllowed, charAllowed, passwordGenerator]); // Dependency array for the useEffect hook


    return (
        <div className='w-full max-w-md mx-auto shadow-md rounded-sm my-8 text-blue-500 bg-gray-300 p-4'>
            {/* Password and Copy Area */}
            <div className="flex shadow rounded-sm overflow-hidden mb-4">
                {/* Password */}
                <input type="text" value={password} placeholder='Password' className='outline-none w-full py-1 px-3 text-sm' readOnly ref={passwordRef} />
                {/* Copy */}
                <button className='bg-blue-500 duration-200 ease-in-out text-white w-24 rounded-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600' onClick={copyPasswordToClipboard}>Copy</button>
            </div>
            {/* Customization Area */}
            <div className="flex text-sm gap-x-2">
                {/* Range */}
                <div className="flex items-center gap-x-1">
                    <input type="range" min={6} max={16} value={length} className='cursor-pointer' onChange={(ev) => { setLength(ev.target.value) }} />
                    <label className="text-gray-700">Length: {length}</label>
                </div>
                {/* Number Check */}
                <div className="flex items-center gap-x-1">
                    <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => { setNumberAllowed((prev) => !prev); }} />
                    <label className="text-gray-700">Numbers</label>
                </div>
                {/* Character Check */}
                <div className="flex items-center gap-x-1">
                    <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={() => { setCharAllowed((prev) => !prev); }} />
                    <label className="text-gray-700">Characters</label>
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;