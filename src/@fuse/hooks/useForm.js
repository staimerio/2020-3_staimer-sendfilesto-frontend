import _ from '@lodash';
import { useCallback, useState } from 'react';

function useForm(initialState, onSubmit) {
	const [form, setForm] = useState(initialState);

	const handleChange = useCallback(event => {
		// event.persist();
		setForm(_form =>
			_.setIn(
				{ ..._form },
				event.target.name,
				event.target.type === 'checkbox' ? event.target.checked : event.target.value
			)
		);
	}, []);

	const resetForm = useCallback(() => {
		if (!_.isEqual(initialState, form)) {
			setForm(initialState);
		}
	}, [form, initialState]);

	const setInForm = useCallback((name, value) => {
		setForm(_form => _.setIn(_form, name, value));
	}, []);

	const handleSubmit = useCallback(
		event => {
			if (event) {
				event.preventDefault();
			}
			if (onSubmit) {
				onSubmit();
			}
		},
		[onSubmit]
	);

	/**Custom Hooks */
	const onInvalid = useCallback(() => {
		if (!form || !form.form_valid) return;
		setForm(form => _.setIn({ ...form }, 'form_valid', false));
	}, [form]);

	const onValid = useCallback(() => {
		if (!form || form.form_valid) return;
		setForm(form => _.setIn({ ...form }, 'form_valid', true));
	}, [form]);

	return {
		form,
		handleChange,
		handleSubmit,
		resetForm,
		setForm,
		setInForm,
		onInvalid,
		onValid
	};
}

export default useForm;
