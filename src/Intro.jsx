import { useState } from 'react'
import './index.css'

export default function Intro ({info}){
    return  (
        <div className="sayHi">
            <h1>About me</h1>
            <p>Hello, my name is {info.name} and I'm a Technical Artist from {info.location}. </p>
        </div>
    );
}