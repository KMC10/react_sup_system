import React from 'react'
import { IoMdMenu } from "react-icons/io";

function Check() {
    return (
        <>
            <h1>Check in and Check out</h1>

            {/*Side Navigation*/}
            <div>
                <button>
                    <IoMdMenu />
                </button>
            </div>

            {/*Main window*/}
            <div>
                {/*Checkin button*/}
                <button>
                    Checkin
                </button>
                {/*Checkout button*/}
                <button>
                    Checkout
                </button>
            </div>
        </>
    )
}

export default Check;