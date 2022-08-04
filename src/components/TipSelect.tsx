import { useState } from 'react';

import { Button } from './Button';
import { Input } from './Input';

type Props = {
    onChange: any;
}

const tips = [5, 10, 15, 25, 50];
const onTipClick = (btnTip?: HTMLDivElement) => {
    const btnsTips = document.querySelectorAll(`[data-type = 'tip']`);
    btnsTips.forEach(btn => btn.classList.remove('active'));
    btnTip?.classList.add('active');
}

export const TipSelect = ({ onChange }: Props) => {
    const [customTip, setCustomTip] = useState('');
    const onTipChange = (tip: string, method: number) => {
        onChange({
            name: 'tip',
            value: tip
        });

        if (method === 0) { setCustomTip('') }
        if (method === 1) { setCustomTip(tip); onTipClick() }
    }

    return (
        <div className="tip">
            <h4>Select Tip %</h4>
            <div className="tips">
                {
                    tips.map(tip => (
                        <Button
                            type="tip" 
                            key={tip}
                            text={`${ tip }%`} 
                            onClick={(btnTip) => {
                                onTipClick(btnTip);
                                onTipChange(`${tip}`, 0);
                            }}
                        />
                    ))
                }

                <Input
                    placeholder="custom"
                    value={ customTip }
                    name="customTip"
                    onChange={ (data) => onTipChange(data.value, 1) }
                    icon={ undefined }
                />
            </div>
        </div>
    )
}
