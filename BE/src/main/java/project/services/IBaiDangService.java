package project.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import project.models.BaiDang;

import java.util.List;
import java.util.Optional;

public interface IBaiDangService {
    Optional<BaiDang> findById(Integer id);

    BaiDang save(BaiDang customer);

    void deleteById(Integer id);

    List<BaiDang> findAll();
}
