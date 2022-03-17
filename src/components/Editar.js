import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { editAsyn } from "../Redux/actions/actionProducts";
import { editarFavASync } from "../redux/actions/actionsPokemonesFav";


const Editar = ({ modal }) => {
    
   

   return (
      <div>
         <>
            <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                
               </Modal.Header>
               <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ponle un apodo a tú Pokemon</Form.Label>
                        <Form.Control
                           type="text"
                           name="apodo"
                           placeholder="Coloca un apodo"
                           value={apodo}
                           onChange={handleInputChange}
                        />

                     </Form.Group>

                     <Button variant="secondary" onClick={handleClose}>
                        Close
                     </Button>

                     <Button
                        type="submit"

                        onClick={() => {
                           handleClose();
                           handleSubmit();
                        }}
                     >
                        Save Changes
                     </Button>
                  </Form>
               </Modal.Body>
            </Modal>
         </>
      </div>
   );
};

export default Editar;