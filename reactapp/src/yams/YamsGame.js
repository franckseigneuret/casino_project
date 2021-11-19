import React from 'react'
import { Container, Row } from 'reactstrap'
import FiveDices from './FiveDices'
import ScoreTable from './ScoreTable'

const YamsGame = () => {
  return (
    <Container>
      <Row>
        <div className="col col-4 text-center">
          <FiveDices />
        </div>
        <div className="col col-8">
          <ScoreTable />
        </div>
      </Row>

    </Container>
  )
}

export default YamsGame
