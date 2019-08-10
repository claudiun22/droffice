package com.droffice.office.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.droffice.office.model.Doctori;

public interface DoctoriRepository extends JpaRepository<Doctori, Long>{

	List<Doctori> findByemail(String email);

}
