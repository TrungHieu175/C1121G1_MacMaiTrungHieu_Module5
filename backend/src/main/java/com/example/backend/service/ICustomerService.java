package com.example.backend.service;

import com.example.backend.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ICustomerService {

    Optional<Customer> findById(Long id);

    Customer save(Customer customer);

    void deleteById(Long id);

    List<Customer> findAllCustomer();


}
