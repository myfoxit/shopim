import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Axios from "axios";
import {useDispatch,useSelector} from 'react-redux'
import { listProductDetails } from "../actions/productActions";
import Message from '../components/Message';
import Loader from '../components/Loader';


const ProductScreen = ({ match }) => {
  
  const dispatch = useDispatch()
  const productDetail= useSelector(state => state.productDetail)
  const {loading,error, product}= productDetail;
 
  useEffect(() => {

  dispatch(listProductDetails(match.params.id))
    },[dispatch,match])


  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
  {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :
   <Row>
   <Col md={6}>
     <Image src={product.image} alt={product.name} fluid />
   </Col>
   <Col md={3}>
     <ListGroup variant="flush">
       <ListGroup.Item>
         <h3>{product.name}</h3>
       </ListGroup.Item>
       <ListGroup.Item>
         <Rating
           value={product.rating}
           text={`${product.numReviews} reviews`}
         />
       </ListGroup.Item>
       <ListGroup.Item>Price: $ {product.price}</ListGroup.Item>
       <ListGroup.Item>Description: {product.description}</ListGroup.Item>
     </ListGroup>
   </Col>
   <Col md={3}>
     <Card>
       <ListGroup variant="flush">
         <ListGroup.Item>
           <Row>
             <Col>Price: </Col>
             <Col>
               <strong>{product.price}</strong>
             </Col>
           </Row>
         </ListGroup.Item>
         <ListGroup.Item>
           <Row>
             <Col>Status: </Col>
             <Col>
               <strong>
                 {product.countInStock > 0 ? " In Stock" : "Out of Stock"}
               </strong>
             </Col>
           </Row>
         </ListGroup.Item>
         <ListGroup.Item>
           <Button
             className="btn-block"
             type="button"
             disabled={product.countInStock === 0}
           >
             ADD TO CART
           </Button>
         </ListGroup.Item>
       </ListGroup>
     </Card>
   </Col>
 </Row>
  }
     
    </>
  );
};

export default ProductScreen;
