import React, {useReducer, useState} from 'react';
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import Select from "./UI/Select/Select";
import {formReducer, formActions} from "../reducers/formReducer";

const ItemFormComponent = ({action, content = {}, title, ...props}) => {
		const [values, dispatch] = useReducer(formReducer, content);

		const handleChange = e => {
			dispatch({
				type: formActions.CHANGE_INPUT,
				payload: {name: e.target.name, value: e.target.value}
			});
		};

		const handleSubmit = e => {
			e.preventDefault();
			action({
					variables: {
						...values
					}
				}
			);
		};

		return (
			<div className="_container">
				<div className="item-form">
					<img className='item-form__img' src={values?.img || '/img/pizza.png'} alt=""/>
					<div>
						<h2 className='title item-form__title'>{title}</h2>
						<form
							className='form item-form__form'
							onSubmit={handleSubmit}
						>
							<Input
								required
								type="text"
								name="name"
								value={values?.name}
								placeholder="Name"
								onChange={handleChange}
							/>
							<Input
								required
								type="text"
								name="img"
								value={values?.img}
								placeholder="Img"
								onChange={handleChange}
							/>
							<Select
								required
								type="text"
								name="size"
								value={values?.size}
								placeholder="Size"
								onChange={handleChange}
							>
								<option value="standard">
									Standard
								</option>
								<option value="large">
									Large
								</option>
							</Select>
							<Input
								required
								type="number"
								name="price"
								value={values?.price}
								placeholder="Price"
								onChange={handleChange}
							/>
							<div className="item-form__btns">
								<Button type='submit'>
									Submit
								</Button>
							</div>
						</form>
					</div>
				</div>

			</div>
		);
	}
;

export default ItemFormComponent;