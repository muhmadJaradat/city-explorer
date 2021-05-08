import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Movie from './Movie'

export class Movies extends React.Component {
    render() {
        return ( 
            <>
            <h1 style={{textAlign:'center',marginTop:'50px',marginBottom:'50px'}} > Movies  </h1>
            <Container>
            <Row >
            {
                this.props.movieData.map(data=>
                    <Movie 
                    imageURl={data.imageURl}
                      title={data.title}
                      overView={data.overView}
                      avgVotes={data.avgVotes}
                      totalVotes={data.totalVotes}
                      popularity={data.popularity}
                      releasedOn={data.releasedOn} />
                       
                    )
                
            }
            
            </Row>
            </Container>
            
                        </>
        )
    }
}

export default Movies
