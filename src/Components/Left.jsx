import React from 'react'
import '../Styles/Left.css'

export default function Left() {
    return (
        <div className="Left">
            <form>
                <label>Bill</label>
                <input type="text"></input>
            </form>
            <form>
                <label>Select Tip %</label>
                <div>
                    <button>5%</button>
                    <button>10%</button>
                    <button>15%</button>
                </div>
                <div>
                    <button>25%</button>
                    <button>50%</button>
                    <input type="text" placeholder="Custom"></input>
                </div>
            </form>
            <form>
                <label>Number of People</label>
                <input type="text"></input>
            </form>
        </div>
    )
}
