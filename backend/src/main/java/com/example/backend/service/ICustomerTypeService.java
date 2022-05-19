package com.example.backend.service;

import com.example.backend.model.Customer;
import com.example.backend.model.CustomerType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ICustomerTypeService {


    List<CustomerType> findAllCustomerType();
}
