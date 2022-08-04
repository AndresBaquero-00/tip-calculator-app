import { useState } from 'react';

export const useForm = <T>(initialState: T) => {
    const [form, setForm] = useState(initialState);
    const onChange = (data: { name: string, value: string }) => {
        setForm({
            ...form,
            [data.name]: data.value
        });
    }
    const onReset = () => setForm(initialState);

    return {
        form,
        onChange,
        onReset
    }
}
