import React from 'react';

function LogWindow({ messages }) {
    return (
        <div className="log-window bg-gray-100 p-4 rounded-md overflow-y-scroll shadow-inner h-40">
            <ul className="list-decimal list-inside">
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
}

export default LogWindow;
