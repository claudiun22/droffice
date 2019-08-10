package com.droffice.office.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.droffice.office.model.Patients;
import com.droffice.office.repository.PatientsRepository;

@RestController
@RequestMapping("office/")
public class PatientsController {
	
	@Autowired
	PatientsRepository repository;
	
	@RequestMapping(value="patients", method = RequestMethod.GET)
	public List<Patients> list() {
		return repository.findAll();
	}
	
	@RequestMapping(value="/dr/patients/{id}", method = RequestMethod.GET)
	public List<Patients> getbyId(@PathVariable("id") Long id) {
		return repository.findBydrid(id);
	}
	
	@GetMapping(value="patients/{id}")
	public Optional<Patients> getOne(@PathVariable("id") Long id) {
		return repository.findById(id);
	}
	
	
	@PostMapping("/addpatient")
    public String addPatient(@RequestBody Patients patient) { 
        repository.save(patient);
        return "success";
    }
	
	@PutMapping("updatepatients/{id}")
	public  String updateIstoric(@RequestBody Patients patient, @PathVariable("id") Long id) {
		patient.setId(id);
		System.out.println(patient.getNume());
		System.out.println(patient.getIstoric());
		System.out.println(patient.getId());
		repository.save(patient);
		return "success";
	}
	
	@DeleteMapping("patients/{id}")
	public String deletePatient(@PathVariable("id") Long id) {
		repository.deleteById(id);
		return "success";
	}
	
}
