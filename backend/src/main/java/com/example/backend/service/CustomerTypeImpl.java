package com.example.backend.service;

import com.example.backend.model.CustomerType;
import com.example.backend.repository.ICustomerRepository;
import com.example.backend.repository.ICustomerTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerTypeImpl implements ICustomerTypeService{
    @Autowired
    private ICustomerTypeRepository iCustomerTypeRepository;

    @Override
    public List<CustomerType> findAllCustomerType() {
        return iCustomerTypeRepository.findAll();
    }
}
