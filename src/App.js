import './App.css';
import ClassInfo from './Components/ClassInfo';
import Updates from './Components/Updates';
import AssignmentView from './Components/AssignmentView';
import Midterm from './Components/Midterm';
import useGoogleSheets from 'use-google-sheets';



function App() {

  const APIkey = "AIzaSyBQsfuuMqYRw2OPzzRNrKjP-r8sGyK6hbM" //ok i know it's bad to put it here but...
  var sheetId = "12igoimslU9X8N7kIS3TIIpi5guKClBLN2b1E6CG3ric"
  const { data, loading, error, refetch } = useGoogleSheets({
      apiKey: APIkey,
      sheetId: sheetId,
    });
  
    if (loading) {
      return <div>Loading...</div>;
    }

    console.log(data)

  return (
    <div className="App">
      <h1>Theory and Practice of Tangible User Interfaces</h1>
      <h3>Fall 2024, INFO C262 & NWMEDIA C262</h3>

      <Midterm />

      <ClassInfo />

      <Updates />

      <AssignmentView data={data[0]['data']} />


    </div>
  );
}

export default App;
