import React from "react";

export function InputBox({label,placeholder}){
 return <div>
    {/* Input bar Heading */}
    <div className="text-sm font-medium text-left py-2">
    {label}
    </div>

    {/* input field */}
    <input placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200"/>
 </div>
    
}