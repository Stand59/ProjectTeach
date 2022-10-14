import {selectAllWorksheets} from "./worksheetsSlice.js"
import { Row, Col} from 'reactstrap';
import Worksheet1Content from "./worksheet1Content.js";
import Table1 from "./table.js"


const WorksheetOne = () => {
    const worksheets = selectAllWorksheets();
    const selected = worksheets.find(obj => {
        return obj.id === 0;
      });

    return(
        <Row>
            <Col md='5' className='m-4' key={selected.id}>
                <Row>
                    <Worksheet1Content ws1={selected}/>
                    <Table1/>
                </Row>
            </Col>
        </Row>
    );
}

export default WorksheetOne;

//https://thinkster.io/tutorials/react-change-state-from-input//
//https://reactjs.org/docs/forms.html//