import React from 'react';

export default function Midterm()
{
    const Feedback_forms = [
        {
            studentNames: "1. Ankur, Karis, Allison, Sadhika",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSfS56wr5Sbl-_WEeJC-auspBX_Shk2MA1Na8bK3mXwvQtu5rQ/viewform",
            feedback_url: "https://docs.google.com/spreadsheets/d/1ZxVNM8cECu1y0_JNCNFGBmAagchreoQkbg5ob9Vn0gA/edit?usp=sharing"
        },{
            studentNames: "2. Praj, Ria, Karen",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdvskieilbzeihgBKti_er-tgfAZKu3-GyYW8BqGFTo1GkDZg/viewform",
            feedback_url: "https://docs.google.com/spreadsheets/d/1gHqo4XyW9cGOYVSs1ol3bn-cyFQwV7w6UJtlIWy9bIQ/edit?usp=sharing"
        },{
            studentNames: "3. Carina, Yuhe, Junyan (Jenny), Stephanie, Weilong",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdQZIVnQeF8mqOXN8adPIzdvmCfjL0WploANEbkSuSb_bVb7w/viewform",
            feedback_url: "https://docs.google.com/spreadsheets/d/1jmVqqwcaSs_9Vqh6t2NYyk3Jx9moGT47p0WZGuK4SGw/edit?usp=sharing"
        },{
            studentNames: "4. June, James, Vence, Aylish",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSfxtuVkavzmGvvxH6UN-1j0KMWvIwEOp2aSRppyj4XUJIMl3A/viewform",
            feedback_url: "https://docs.google.com/spreadsheets/d/1yh1-nL1KYT3p6Hr7cvK1bye08SAKD8HaejowcB9SNsI/edit?usp=sharing"
        }]
        const Feedback_forms2 = [{
            studentNames: "1. Christine, Liam, Katy, Eileen, Divya",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSfsM92Y0nFmqo9OxGe3A_WiuFIjbirZVl1qHqs7uISesyx2ew/viewform",
            feedback_url: "https://docs.google.com/spreadsheets/d/1pbjp4rYg0nwaoRzi00ZLlCQ_1gwWXIUKNoZW7Nj0Ou0/edit?usp=sharing"
        },{
            studentNames: "2. Julien, Sebastian, Frank, Eric, Elyssa",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdX7tl2rsrIsJc9qoGbrPLje982SJDkkRZqkEXl_riFeUxMeg/viewform",
            feedback_url: "https://docs.google.com/spreadsheets/d/15xwYHakY1v7Akzq8EankR4Hj-odLSdsQnJ_OuB1F73g/edit?usp=sharing"
        },{
            studentNames: "3. Yuto, Monica, Mary, Laila",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSeD7Yy53cghj50kbMEaJU4RTtk36cM5gIGOGSkGP9Ih6Igwhw/viewform",
            feedback_url: "https://docs.google.com/spreadsheets/d/1Flel2oSmRgN_iSlfWyjQKFo2RAh8FCWXABh5czO6Hv8/edit?usp=sharing"
        },{
            studentNames: "4. Salia, Andrew, Hannah, Botond, Tyler, Jared",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSfacdSK-JPd2U9DR1jATiJd8J7UU999FkOxm6sclchbaEGKDg/viewform",
            feedback_url: "https://docs.google.com/spreadsheets/d/1B9zNkc4W6wmEXny6gjqt_3kJuXHTnzI7M2-41D8lOSI/edit?usp=sharing"
        },{
            studentNames: "5. Aaron, Brian, Edward, Seemin, Matthieu",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdUoUnnbALcZNtd7FxhcXCq9Mc4rAtVtaRSimuE6BCXi_bb3w/viewform",
            feedback_url: "https://docs.google.com/spreadsheets/d/1H5hOYDIRC0qW_6z0sbEq17h50isBkzKsJdvXrxN9d2s/edit?usp=sharing"
        },{
            studentNames: "6. Marissa, Paloma, Sonja, Evan (Nami), Gyuyeon",
            url: "https://docs.google.com/forms/d/e/1FAIpQLScX00onp4EFB7zN4hyqhpKgz78rOQKuANupD4XAyX6i4jCY2Q/viewform",
            feedback_url: "https://docs.google.com/spreadsheets/d/13mBgP2ShlOngpNP7E0iDraJM6Q7q4cmX4zUi0p05WoE/edit?usp=sharing"
        }
    ]
    return(
        <div className='block class-info'>

            <h3>Midterm Feedback Forms ✍️ </h3>

            <h5> 10/14 </h5>

            {Feedback_forms.map( e =>
                <div className="link-box-wrapper">
                    <Group studentNames={e.studentNames} url={e.url} feedback_url={e.feedback_url} />
                </div>

            )}
            <br/>
            <h5> 10/21 </h5>

            {Feedback_forms2.map( e =>
                <div className="link-box-wrapper">
                    <Group studentNames={e.studentNames} url={e.url} feedback_url={e.feedback_url}  />
                </div>

            )}

        </div>
    )
}

function Group(props)
{
    console.log(props.feedback_url)
    return(
        <div>
            <p>{props.studentNames}</p>
            <a href={props.url} target='blank'>Feedback form</a>
            <p>{"  "}</p>
            {props.feedback_url != undefined?
                <a href={props.feedback_url} target='blank'><b>Class feedback ✍️</b></a>
                :
                ""
            }
        </div>
    )
}