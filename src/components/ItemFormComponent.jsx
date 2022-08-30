import React, {useState} from 'react';
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";

const ItemFormComponent = ({action, ...props}) => {
		const [values, setValues] = useState();

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
					<h2 className='title sign__title'>Create New Item</h2>
					<form
						className='form sign__form'
						onSubmit={omSubmit}
					>
						<Input
							required
							name="name"
							placeholder="Name"
							onChange={onChange}
						/>
						<Input
							required
							name="size"
							placeholder="Size"
							onChange={onChange}
						/>
						<Input
							required
							type="number"
							name="price"
							placeholder="Price"
							onChange={onChange}
						/>
						<Button
							className='form__btn'
							type='submit'
						>
							Add Item
						</Button>
					</form>
				</div>
			</div>
		);
	}
;

export default ItemFormComponent;