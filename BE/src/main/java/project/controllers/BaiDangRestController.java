package project.controllers;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import project.dto.BaiDangDto;
import project.models.*;
import project.services.IBaiDangService;
import project.services.IDanhMucService;

import javax.validation.Valid;
import java.util.*;

@RestController
@CrossOrigin("*")
public class BaiDangRestController {

    @Autowired
    IDanhMucService iDanhMucService;

    @Autowired
    IBaiDangService iBaiDangService;

    @ModelAttribute
    public List<DanhMuc> getAllDanhMuc() {
        return iDanhMucService.findAll();
    }


    @ModelAttribute
    public List<BaiDang> getAllBaiDang() {
        return iBaiDangService.findAll();
    }

    @GetMapping(value = "/danh-muc/list")
    public ResponseEntity<List<DanhMuc>> getAllCustomerType(){
        List<DanhMuc> customerTypes = iDanhMucService.findAll();
        if (customerTypes.isEmpty()){
            return new  ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(customerTypes,HttpStatus.OK);
    }


    @PostMapping(value = "/bai-dang/create")
    public ResponseEntity<?> saveCustomer(@Validated @RequestBody BaiDangDto baiDangDto, BindingResult bindingResult) {
        System.out.println("a");
        baiDangDto.validate(baiDangDto,bindingResult);
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getAllErrors() , HttpStatus.NOT_MODIFIED);
        }
        if (baiDangDto == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            BaiDang baiDang = new BaiDang();
            BeanUtils.copyProperties(baiDangDto,baiDang);

            iBaiDangService.save(baiDang);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    

    @PutMapping(value = "/bai-dang/update/{id}")
    public ResponseEntity<?> updateCustomer(@Validated @RequestBody BaiDangDto baiDangDto, BindingResult bindingResult) {
        new BaiDangDto().validate(baiDangDto,bindingResult);
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getAllErrors() , HttpStatus.NOT_MODIFIED);
        }
        if (baiDangDto == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            BaiDang customer = new BaiDang();
            BeanUtils.copyProperties(baiDangDto,customer);
            return new ResponseEntity<>(iBaiDangService.save(customer),HttpStatus.CREATED);
        }
    }

    @DeleteMapping(value = "/bai-dang/delete/{id}")
    public ResponseEntity<BaiDang> delete(@PathVariable Integer id){
        if(iBaiDangService.findById(id)!= null){
            iBaiDangService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
