import React from 'react';
import './crud-bar.css';
import {Col, Form, FormGroup} from "reactstrap";

const SearchBar = () => {
  return<Col lg='12'>
    <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span>
                    <i class="ri-add-line"></i>
                </span>
                <div>
                    <h6>Search Blogs</h6>
                    <input type='text' placeholder='Where are you going?'/>
                </div>
            </FormGroup>
            
            <FormGroup className="d-flex gap-3 form__group form__group-last">
                <span>
                    <i class="ri-add-line"></i>
                </span>
                <div>
                    <h6>Add Tags</h6>
                    <input type='text' placeholder='Add tags'/>
                </div>
            </FormGroup>
            
            <span className="search__icon">
                <i class="ri-search-2-line"></i>
            </span>
        </Form>
    </div>
  </Col>
}

export default SearchBar
