import React from 'react';
import { LinkBox } from './AssignmentView';

export default function Updates()
{
    const links_lab = [
        "https://medium.com/@aaron.rodden21/lab-5-piezo-speakers-the-ocarina-glove-dd8632987460",
        "https://medium.com/@ankur_kela/piezo-lab-5d8650881491",
        "https://medium.com/@edwardfraser_1948/lab-5-floaty-bird-bbb45e97b6c4",
        "https://medium.com/@hannah_jiang/lab-5-piezo-speakers-a283d9d34138",
        "https://medium.com/@matthieu.delarue/interact-with-light-and-force-sensors-in-arduino-3fba3be3968e",
        "https://medium.com/@ria_antony/lab-5-output-piezo-speakers-0d4399d6df3c"
    ]

    return (
        <div className='block'>

            <h3>Attendence ✨</h3>
            <LinkBox url = "https://docs.google.com/spreadsheets/d/1_kJ3G7rP-pik2INGDg7g-Q1CxSCaBMzpopoU3sqzajc/edit?usp=sharing"  />
            
            <h3>Lab 5 Highlights ✨</h3>
            {links_lab.map( e =>
                <div className="link-box-wrapper">
                    <LinkBox url = {e}  />
                </div>

            )}

        </div>
    )
}