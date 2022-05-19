package com.example.backend.controller;

import com.example.backend.dto.CustomerDto;
import com.example.backend.model.Customer;
import com.example.backend.model.CustomerType;
import com.example.backend.repository.ICustomerTypeRepository;
import com.example.backend.service.ICustomerService;
import com.example.backend.service.ICustomerTypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class CustomerController {

    @Autowired
    private ICustomerService iCustomerService;

    @Autowired
    private ICustomerTypeService iCustomerTypeService;


    @GetMapping("/list-customer-type")
    public ResponseEntity<List<CustomerType>> getAllCustomerType(){
        List<CustomerType> customerTypes = iCustomerTypeService.findAllCustomerType();
        if (customerTypes.isEmpty()){
            return new  ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(customerTypes,HttpStatus.OK);
    }

    @GetMapping("/list-customer")
    public ResponseEntity<List<Customer>> getAllCustomer(@RequestParam(defaultValue = "0") int page){
        List<Customer> customers = iCustomerService.findAllCustomer();
        if (customers.isEmpty()){
            return new  ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(customers,HttpStatus.OK);
    }

    @GetMapping("get/{id}")
    public ResponseEntity<Customer> findById(@PathVariable Long id){
        Optional<Customer> customerOptional = iCustomerService.findById(id);
        if (customerOptional.isPresent()){
            return new  ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(customerOptional.get(),HttpStatus.OK);
    }



    @PostMapping("/create-customer")
    public ResponseEntity<?> saveCustomer(@Validated @RequestBody CustomerDto customerDto, BindingResult bindingResult) {
        System.out.println("a");
        customerDto.validate(customerDto,bindingResult);
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getAllErrors() , HttpStatus.NOT_MODIFIED);
        }
        if (customerDto == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            Customer customer = new Customer();
            BeanUtils.copyProperties(customerDto,customer);

            iCustomerService.save(customer);
            return new ResponseEntity<>(HttpStatus.OK);
        }

    } @PutMapping("/update-customer/{id}")
    public ResponseEntity<?> updateCustomer(@Validated @RequestBody CustomerDto customerDto, BindingResult bindingResult) {
        new CustomerDto().validate(customerDto,bindingResult);
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getAllErrors() , HttpStatus.NOT_MODIFIED);
        }
        if (customerDto == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            Customer customer = new Customer();
            BeanUtils.copyProperties(customerDto,customer);
            return new ResponseEntity<>(iCustomerService.save(customer),HttpStatus.CREATED);
        }

    }

    @DeleteMapping("customer/{id}")
    public ResponseEntity<Customer> delete(@PathVariable Long id){
        if(iCustomerService.findById(id)!= null){
            iCustomerService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
