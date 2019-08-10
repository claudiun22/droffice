package com.droffice.office.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.droffice.office.model.Patients;

public interface PatientsRepository extends JpaRepository<Patients, Long>{
	
	List<Patients> findBydrid(Long id);

}
