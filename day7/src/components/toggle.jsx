import { useState } from "react";

export function Show() {
    const [showtoggle, setShowtoggle] = useState(false);
    const [showpara, setShowpara] = useState(false);

    return (
        <div>
            {showtoggle ? (
                <h1>Muhammad Abid</h1>
            ) : (
                <h1>Click the button to show text</h1>
            )}

            {showpara ? (
                <p>Welcome to React Course</p>
            ) : (
                <p>First click to show</p>
            )}

            <button
                onClick={() => {
                    setShowtoggle(!showtoggle);
                    setShowpara(!showpara);
                }}
            >
                TOGGLE
            </button>
        </div>
    );
}