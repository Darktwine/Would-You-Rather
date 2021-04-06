import React from 'react';
// import {Container, Card} from 'react-bootstrap'
import './Card.css';

function Card({title,imgURL,food,trait,song,hero}){
    return(
        <div className='card-container'>
            <div className='image-container'>
                <img src={imgURL} alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h1>{title}</h1>
                </div>
                <div className='card-body'>
                    <p>Personality Trait: {trait}</p>
                    <p>Favorite Food: {food}</p>
                    <p>Favorite Song: {song}</p>
                    <p>Favorite SuperHero: {hero}</p>
                </div>
                <div className='btn'>
                    <button>
                        <a>This One!</a>
                    </button>
                </div>
            </div>
            

        </div>
    )
}

export default Card;

// class Card extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello</h1>
//                 <Container>
//                     <Card style={{ width: '18rem' }}>
//                         {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
//                         <Card.Body>
//                             <Card.Title>Card Title</Card.Title>
//                             <Card.Text>
//                             Some quick example text to build on the card title and make up the bulk of
//                             the card's content.
//                             </Card.Text>
//                         </Card.Body>
//                         {/* <ListGroup className="list-group-flush">
//                             <ListGroupItem>Cras justo odio</ListGroupItem>
//                             <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//                             <ListGroupItem>Vestibulum at eros</ListGroupItem>
//                         </ListGroup> */}
//                         <Card.Body>
//                             <Card.Link href="#">Card Link</Card.Link>
//                             <Card.Link href="#">Another Link</Card.Link>
//                         </Card.Body>
//                     </Card>
//                 </Container>
//             </div>
//         )
//     }
// }

// export default Card;