import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout'
import {Input, Table} from "reactstrap";
import generateTable from '../modules/pokeapi'
import Pagination from 'react-js-pagination'


global.axios = require('axios');

export default class extends Page {


    state = {
        pokemons: false,
        activePage: 1,
        details: [],
        searchQuery: ''
    }

    componentDidMount() {
        this.loadPokemons.apply(this)
    }

    async loadPokemons() {
        const pokemons = await generateTable({limit: 10, offset: 10 * this.state.activePage})
        this.setState({pokemons})
    }

    render() {

        let {pokemons, activePage,searchQuery} = this.state

        if (this.state.searchQuery) {
            pokemons = pokemons.pokemons.filter(pokemon => {
                return pokemon.name.includes(searchQuery)
            })

        }

        return (
            <Layout>
                <form>
                    <Input type='search' placeholder='search' onChange={this.handleSearch.bind(this)}/>
                </form>
                {pokemons ? <div>
                    <Table>
                        <thead>
                        <tr>
                            <th>image</th>
                            <th>name</th>
                        </tr>
                        </thead>
                        <tbody>

                        {pokemons.pokemons.map((pokemon, index) => {
                            return <tr key={index}>
                                <td><img src={pokemon.image}/></td>
                                <td>{pokemon.name}</td>
                            </tr>
                        })}
                        </tbody>
                    </Table>
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={pokemons.count/10}
                        linkClass="page-link"
                        itemClass="page-item"
                        linkClassPrev="prev"
                        onChange={this.handlePageChange.bind(this)}
                    />
                </div> : null}
            </Layout>
        )
    }

    handlePageChange(activePage) {
        this.setState({activePage,})
        this.loadPokemons.apply(this)

    }

    handleSearch(e) {
        this.setState({searchQuery: e.target.value})
    }


}
