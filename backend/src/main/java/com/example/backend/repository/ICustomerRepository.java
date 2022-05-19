package com.example.backend.repository;

import com.example.backend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICustomerRepository extends JpaRepository<Customer,Long> {

}
