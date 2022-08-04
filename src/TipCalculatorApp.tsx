import { Button, Card, Fieldset, Report, TipSelect } from './components';
import { useCalculator } from './hooks';
import { logo } from './assets';

export const TipCalculatorApp = () => {
    const { form, results, onChange, onReset } = useCalculator();

    return (
        <div className="tip-calculator-app">
            <header>
                <img src={ logo } />
            </header>
            <Card>
                <div className="form">
                    <Fieldset 
                        title="Bill" 
                        name="bill"
                        value={ form.bill }
                        onChange={ onChange }
                        icon="attach_money"
                    />
                    <TipSelect onChange={ onChange } />
                    <Fieldset 
                        title="Number of People" 
                        name="people"
                        value={ form.people }
                        onChange={ onChange }
                        icon="person"
                    />
                </div>
                <div className="result">
                    <div>
                        <Report text="Tip Amount" value={ results.tipAmount } />
                        <Report text="Total" value={ results.total } />
                    </div>
                    <Button 
                        type="reset" 
                        text="reset"
                        onClick={ () => onReset() }
                    />
                </div>
            </Card>
        </div>
    )
}
