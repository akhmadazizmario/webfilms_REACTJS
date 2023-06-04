import {Col, Container, Row, Button} from "react-bootstrap"

const Intro = () => {
    return (
        <div className=' intro'>
        <Container className='text-dark d-flex justify-content-center align-items-center'>
          <Row>
            <Col>
            <div className='title'>Nonton Gratis Selamanya</div>
            <div className='title'>Nonton yuk sekarang gays</div>
            <div className="introButton mt-4 text-center">
                <Button variant="primary">Lihat Semua List</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro