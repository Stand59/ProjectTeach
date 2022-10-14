import { WORKSHEETS } from "../../app/shared/WORKSHEETS.js";
import { Row, Col} from 'reactstrap';
import Worksheet1Content from "./worksheet1Content.js";


const WorksheetOne = () => {
    const selected = WORKSHEETS.find(obj => {
        return obj.id === 0;
      });
      
    return(
        <Row>
            <Col md='5' className='m-4' key={selected.id}>
                <Row>
                    <Worksheet1Content ws1={selected}/>
                </Row>
            </Col>
        </Row>
    );
}

export default WorksheetOne;