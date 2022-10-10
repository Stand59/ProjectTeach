import { WORKSHEET1 } from "../../app/shared/WORKSHEET1.js";
import { Row, Col} from 'reactstrap';


const WorksheetOne = () => {
    return(
        <Row>
            {WORKSHEET1.map((ws1) => {
                return (
                    <Col md='5' className='m-4' key={ws1.id}>
                        <Row>
                            {ws1.paragraph1}
                        </Row>
                    </Col>
                );
            })}
        </Row>
    );
}

export default WorksheetOne;