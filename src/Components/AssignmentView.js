import React, {useState} from "react";
import Select from 'react-select'
import Microlink from '@microlink/react'

const options = [
    { value: 'My Profile', label: 'My Profile' },
    { value: 'Lab1 - Intro to Physical Computing', label: 'Lab1 - Intro to Physical Computing' }
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
        <div>
            <Select options={options}
            onChange={onSelect}
            defaultValue={options[options.length-1]}
            value={{label: selectedOption}}
            />

            <Select options={nameOptions}
            onChange={onSelectName}
            defaultValue='All'
            value={{label: selectedName}}
            />

            {
                props.data.map( el => {
                    if (selectedName != 'All') {
                        if (el['NAME'] == selectedName) {
                            var keys = Object.keys(el)
                            console.log(keys)
                            return (
                                keys.map( k => {
                                    if (k == 'NAME') return null
                                    else {
                                        return <LinkBox url = {el[k]} />
                                    }
                                })
                            )
                        }
                    }
                    else {
                        return(
                            <div>
                                <p>{el['NAME']}</p>
                                <LinkBox url = {el[selectedOption]} />
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
    return (
        <div>
            {/*<a href={props.url}>click</a>*/}
            <Microlink url={props.url} />
        </div>
    )
}