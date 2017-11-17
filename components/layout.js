import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import {
    Button,
    Col,
    Collapse,
    Container,
    Form,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Row
} from 'reactstrap'
import Cookies from './cookies'
import Package from '../package'
import Styles from '../css/index.scss'


export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }


    render() {
        return (
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <style dangerouslySetInnerHTML={{__html: Styles}}/>
                    <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
                </Head>
                <Navbar className="navbar navbar-dark bg-dark navbar-expand-md sticky-top "
                        style={{marginBottom: 10}}>
                    <Link prefetch href="/"><NavbarBrand href="/">{Package.name}</NavbarBrand></Link>
                    <NavbarToggler onClick={this.toggleNavbar}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link prefetch href="/"><NavLink className="text-light" href="/">Home</NavLink></Link>
                            </NavItem>
                        </Nav>

                    </Collapse>
                </Navbar>

                <Container>
                    {this.props.children}
                </Container>
            </div>
        )
    }
}

