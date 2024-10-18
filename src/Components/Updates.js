import React from 'react';
import { LinkBox } from './AssignmentView';

export default function Updates()
{
    const links_lab = [
        "https://medium.com/@tranmary/lab-6-output-dc-motors-ca4f9d7f6dad",
        "https://medium.com/@liam_hatakenaka/lab-6-output-w-dc-motors-bf2085bb03f9",
        "https://medium.com/@gyuyeon/lab-6-output-dc-motors-c9b31369a592",
        "https://medium.com/@elyssa_tong/output-dc-motor-a66016f9ca85",
        "https://medium.com/@divya_srinivasan_60839/lab-6-dc-motors-6d0fc3d6600f",
        "https://medium.com/@cmarcelino/lab-6-output-dc-motors-3d140e35ba28"
    ]

    return (
        <div className='block'>

            <h3>Attendence ✨</h3>
            <LinkBox url = "https://docs.google.com/spreadsheets/d/1_kJ3G7rP-pik2INGDg7g-Q1CxSCaBMzpopoU3sqzajc/edit?usp=sharing"  />
            
            
            <h3>Lab 6 Highlights ✨</h3>
            {links_lab.map( e =>
                <div className="link-box-wrapper">
                    <LinkBox url = {e}  />
                </div>

            )}
            

        </div>
    )
}