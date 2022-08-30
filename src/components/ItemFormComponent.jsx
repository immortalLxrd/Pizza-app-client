import React, {useState} from 'react';
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";

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
			<div className='sign'>
				<div className="_container">
					<h2 className='title sign__title'>{title}</h2>
					<form
						className='form sign__form'
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
						<Input
							required
							type="text"
							name="size"
							value={values?.size}
							placeholder="Size"
							onChange={onChange}
						/>
						<Input
							required
							type="number"
							name="price"
							value={values?.price}
							placeholder="Price"
							onChange={onChange}
						/>
						<Button
							className='form__btn'
							type='submit'
						>
							Submit
						</Button>
					</form>
				</div>
			</div>
		);
	}
;

export default ItemFormComponent;