import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Layout from "../components/Layout"

import Home from './Home'
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Pizza from "./Pizza"
import NewItem from "./NewItem";
import EditItem from "./EditItem";


const Pages = () => {
	return (
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exatc path="/" element={<Home/>}/>
						<Route path="/signup" element={<SignUp/>}/>
						<Route path="/signin" element={<SignIn/>}/>
						<Route path="/pizza/:id" element={<Pizza/>}/>
						<Route path="/pizza/new" element={<NewItem/>}/>
						<Route path="/pizza/:id/edit" element={<EditItem/>}/>
					</Routes>
				</Layout>
			</BrowserRouter>
	)
}


export default Pages