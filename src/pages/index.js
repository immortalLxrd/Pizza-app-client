import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Layout from "../components/Layout"

import Home from './Home'
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Pizza from "./Pizza"


const Pages = () => {
	return (
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exatc path="/" element={<Home/>}/>
						<Route path="/signup" element={<SignUp/>}/>
						<Route path="/signin" element={<SignIn/>}/>
						<Route path="/pizza/:id" element={<Pizza/>}/>
					</Routes>
				</Layout>
			</BrowserRouter>
	)
}


export default Pages