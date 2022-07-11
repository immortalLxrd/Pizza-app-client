import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "../components/Layout"

import HomeRoute from './HomeRoute'
import SignUpRoute from "./SignUpRoute"
import SignInRoute from "./SignInRoute"
import PizzaRouter from "./PizzaRouter"


const Pages = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exatc path="/" element={<HomeRoute />} />
                    <Route path="/signup" element={<SignUpRoute />} />
                    <Route path="/signin" element={<SignInRoute />} />
                    <Route path="/pizza/:id" element={<PizzaRouter />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}


export default Pages