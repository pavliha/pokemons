import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout'
import {Card, Input} from "reactstrap";
import Pagination from 'react-js-pagination'
import withRedux from "next-redux-wrapper";
import makeStore from '../store'
import {loadPokeApi} from '../actions'
import PokemonTable from "../components/PokemonTable";
import {changePage} from "../.next/dist/actions/index";

global.axios = require('axios');
@withRedux(makeStore,
    (state) => ({
        activePage: state.activePage,
        count: state.count,
        pokemons: state.pokemons
    }))
export default class extends Page {

    state = {
        pokemons: false,
        details: [],
        searchQuery: ''
    }

    componentDidMount() {
        this.props.dispatch(loadPokeApi(this.props.activePage))
    }

    render() {

        let {pokemons, activePage, count} = this.props

        if (this.state.searchQuery) {
            pokemons = pokemons.filter(pokemon => {
                return pokemon.name.includes(this.state.searchQuery)
            })
        }

        for(let pokemon of pokemons){
            axios.get(pokemon.url).then(response =>{

            })
        }


        return (
            <Layout>
                <form className='my-3"'>
                    <Input type='search'  placeholder='search' onChange={this.handleSearch.bind(this)}/>
                </form>
                    <Card>
                        <PokemonTable pokemons={pokemons}/>
                    </Card>
                    <div className='pt-4 mx-auto'>
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={10}
                            totalItemsCount={count / 10}
                            linkClass="page-link"
                            itemClass="page-item"
                            linkClassPrev="prev"
                            onChange={this.handlePageChange.bind(this)}
                        />
                    </div>

            </Layout>
        )
    }

    handlePageChange(activePage) {
        this.props.dispatch(changePage(activePage))
        this.props.dispatch(loadPokeApi(this.props.activePage))

    }

    handleSearch(e) {
        this.setState({searchQuery: e.target.value})
    }


}