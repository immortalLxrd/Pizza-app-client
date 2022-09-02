import React, {useState} from 'react';
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import Select from "./UI/Select/Select";

const ItemFormComponent = ({action, content = {}, title, ...props}) => {
		const [values, setValues] = useState(content);

		const onChange = e => {
			setValues({
				...values,
				[e.target.name]: e.target.value
			});
		};

		const omSubmit = e => {
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
							onSubmit={omSubmit}
						>
							<Input
								required
								type="text"
								name="name"
								value={values?.name}
								placeholder="Name"
								onChange={onChange}
							/>
							<Input
								required
								type="text"
								name="img"
								value={values?.img}
								placeholder="Img"
								onChange={onChange}
							/>
							<Select
								required
								type="text"
								name="size"
								value={values?.size}
								placeholder="Size"
								onChange={onChange}
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
								onChange={onChange}
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