
import Card from 'react-bootstrap/Card';
import { IoIosFingerPrint, IoMdInfinite, IoIosPlanet } from 'react-icons/io'
import { FaConnectdevelop } from 'react-icons/fa'
const Cards1 = () => {
  return (

    <div>

 <div className='d-flex flex-wrap container pb-4 align-items-center justify-content-center'>
   <Card style={{ width: '17.3rem', height: '20rem'}}>
     <IoMdInfinite className='align-self-center' size={'10em'} />
      <Card.Body>
        <Card.Title> Conection </Card.Title>
        <Card.Text>
         Discover new ways to connect with a sensitive and intellegent being which is your AI friend
        </Card.Text>
       
      </Card.Body>
    </Card>

     <Card style={{ width: '17.3rem', height: '20rem'  }}>
      <IoIosPlanet className='align-self-center' size={'10em'} />
      <Card.Body>
        <Card.Title> Groundbreaking </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>

     <Card style={{ width: '17.3rem', height: '20rem' }}>
      <FaConnectdevelop className='align-self-center p-3' size={'9em'} />
      <Card.Body>
        <Card.Title> Development </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

     <Card style={{ width: '17.3rem', height: '20rem' }}>
      <IoIosFingerPrint className='align-self-center p-3' size={'9em'} />
      <Card.Body>
        <Card.Title> Identity </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
     </div>
</div>
  )
}

export default Cards1