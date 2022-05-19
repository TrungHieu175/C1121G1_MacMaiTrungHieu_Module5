package com.example.backend.service;

import com.example.backend.model.Customer;
import com.example.backend.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements ICustomerService{

    @Autowired
    private ICustomerRepository iCustomerRepository;

    @Override
    public Optional<Customer> findById(Long id) {
        return iCustomerRepository.findById(id);
    }

    @Override
    public Customer save(Customer customer) {
      return iCustomerRepository.save(customer);
    }

    @Override
    public void deleteById(Long id) {
        iCustomerRepository.deleteById(id);

    }

    @Override
    public List<Customer> findAllCustomer() {
        return iCustomerRepository.findAll();
    }


}
