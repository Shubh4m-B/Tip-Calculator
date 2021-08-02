import React from 'react'
import Left from './Left'
import Right from './Right'
import '../Styles/Container.css'

export default function Container() {
    return (
        <div className="Container">
            <Left />
            <Right />
        </div>
    )
}
