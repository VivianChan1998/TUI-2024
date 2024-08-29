import React, {useState} from "react";
import Select from 'react-select'
import Microlink from '@microlink/react'
import { LinkPreview } from '@dhaiwat10/react-link-preview';

const options = [
    { value: 'My Profile', label: 'My Profile' }
    /*{ value: 'Lab1 - Intro to Physical Computing', label: 'Lab1 - Intro to Physical Computing' }*/
]




export default function AssignmentView(props)
{
    const [selectedOption, setSelectedOption] = useState(options[options.length-1].label);
    const [selectedName, setSelectedName] = useState('All')
    var nameOptions = props.data.map (el=>{return {value: el['NAME'], label: el['NAME']}})
    nameOptions.push({value: 'All', label: 'All'})
    console.log(nameOptions)
    console.log(props.data)
    console.log(selectedOption)
    function onSelect(e) {
        setSelectedOption(e.label)
        setSelectedName('All')
    }

    function onSelectName(e) {
        setSelectedName(e.label)
        if (e.label != 'All') {
            setSelectedOption('All')
        }
        else {
            setSelectedOption(options[options.length-1].label)
        }
    }

    return (
        <div className="block select">
            <h3>Assignments</h3>

            <div className="select-box-container">
                <div className="select-box">
                    <Select options={options}
                    onChange={onSelect}
                    defaultValue={options[options.length-1]}
                    value={{label: selectedOption}}
                    />
                </div>

                <div className="select-box">
                    <Select options={nameOptions}
                    onChange={onSelectName}
                    defaultValue='All'
                    value={{label: selectedName}}
                    />
                </div>
            </div>

            
            

            
            {
                props.data.map( el => {
                    if (selectedName != 'All') {
                        if (el['NAME'] == selectedName) {
                            var keys = Object.keys(el)
                            console.log(keys)
                            return (
                                keys.map( k => {
                                    if (k == 'NAME') return null
                                    if (el[k] === "") return null
                                    else {
                                        return <LinkBox url = {el[k]} keyName={k}  />
                                    }
                                })
                            )
                        }
                    }
                    else {
                        if (el[selectedOption] === "") return null
                        return(
                            <div className="link-box-wrapper">
                                <p>{el['NAME']}</p>
                                <LinkBox url = {el[selectedOption]} keyName={selectedOption}  />
                            </div>
                        )
                }
                }
                )
            }
            
        </div>
    )
}

//https://spreadsheets.google.com/feeds/cells/12igoimslU9X8N7kIS3TIIpi5guKClBLN2b1E6CG3ric/1/public/full?alt=json

function LinkBox(props)
{
    console.log(props.url)
    if(props.url === undefined){
        return(
            <div>
                (No submission available!)
            </div>
        )
    }
    return (
        <div>
            {/*<a href={props.url}>click</a>*/}
            <Microlink url={props.url} />
        </div>
    )
    
}