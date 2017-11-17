import React from 'react'
import {Table} from "reactstrap";

export default ({pokemons,className}) => {
    return <Table className={className}>
        <thead>
        <tr>
            <th>image</th>
            <th>name</th>
        </tr>
        </thead>
        <tbody>

        {pokemons.map((pokemon, index) => {
            return <tr key={index}>
                <td><img src={pokemon.image}/></td>
                <td>{pokemon.name}</td>
            </tr>
        })}
        </tbody>
    </Table>
}

