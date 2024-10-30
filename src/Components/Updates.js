import React from 'react';
import { LinkBox } from './AssignmentView';

export default function Updates()
{
    const links_lab = [
        "https://medium.com/@swang34/lab-7-servo-motor-67cc8941fb76",
        "https://medium.com/@edwardfraser_1948/lab-7-servo-motors-098cfa1121cf",
        "https://medium.com/@gyuyeon/lab-7-output-servo-motors-1df0992aa2e2",
        "https://medium.com/@junyandu/lab-submission-lab-7-output-servo-motors-7ed4caee7b88",
        "https://medium.com/@palomabondi/lab-7-output-servo-motors-61dc54112ef7",
        "https://medium.com/@praj_pandit/output-servo-motors-1ac43a53c685"
    ]

    return (
        <div className='block'>

            <h3>Attendence ✨</h3>
            <LinkBox url = "https://docs.google.com/spreadsheets/d/1_kJ3G7rP-pik2INGDg7g-Q1CxSCaBMzpopoU3sqzajc/edit?usp=sharing"  />
            
            {/*
            <h3>Lab 7 Highlights ✨</h3>
            {links_lab.map( e =>
                <div className="link-box-wrapper">
                    <LinkBox url = {e}  />
                </div>

            )}
                */}

            <h3>Crawler Race !! ✨</h3>

            <iframe width="315" height="560"
            src="https://www.youtube.com/embed/gwTmgdepJh8?si=W4Z80-KlCa96eYnd"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>


            

        </div>
    )
}