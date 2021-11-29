import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const Dcpage = () => {
    return (
        <div>
            <h1>DC Heroes</h1>
            <hr/>
            <HeroesList publisher = "DC Comics" />
        </div>
    )
}
