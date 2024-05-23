import React from "react"

export default function ({ children }:{
    children: React.ReactNode
}) {
    return (
        <div>
            <div className="text-center border-b p-1">
                20% off for ist 5 users
            </div>
            {children}
        </div>
    )
}