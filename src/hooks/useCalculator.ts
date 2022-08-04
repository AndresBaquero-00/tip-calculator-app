import { useForm } from './useForm';

export const useCalculator = () => {
    const { form, onChange, onReset } = useForm({
        bill: '',
        people: '',
        tip: ''
    });

    const bill = parseFloat(form.bill);
    const people = parseInt(form.people);
    const tip = parseFloat(form.tip);
    
    const tipAmount = (bill * (tip * Math.pow(10, -2))) / people;
    const total = (bill / people) + tipAmount;

    const results = {
        tipAmount: isNaN(tipAmount) || !isFinite(tipAmount) ? 0:tipAmount,
        total: isNaN(total) || !isFinite(total) ? 0:total
    }

    return {
        form,
        results,
        onChange,
        onReset
    }
}
