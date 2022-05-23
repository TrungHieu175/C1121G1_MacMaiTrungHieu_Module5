package project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project.models.BaiDang;
import project.repositories.IBaiDangRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BaiDangServiceImpl implements IBaiDangService {
    @Autowired
    private IBaiDangRepository iBaiDangRepository;

    @Override
    public Optional<BaiDang> findById(Integer id) {
        return iBaiDangRepository.findById(id);
    }

    @Override
    public BaiDang save(BaiDang customer) {
        return iBaiDangRepository.save(customer);
    }

    @Override
    public void deleteById(Integer id) {
        iBaiDangRepository.deleteById(id);

    }

    @Override
    public List<BaiDang> findAll() {
        return iBaiDangRepository.findAll();
    }


}
