package com.droffice.office.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.droffice.office.model.Doctori;
import com.droffice.office.repository.DoctoriRepository;

@RestController
@RequestMapping("dr/")
public class DoctoriController {
	
	@Autowired
	DoctoriRepository repository;
	
	@GetMapping("/drlist")
	public List<Doctori> list() {
		return repository.findAll();
	}
	
	@GetMapping("drlist/{email}")
	public List<Doctori> getDoctor(@PathVariable("email") String email) {
		return repository.findByemail(email);
	}
	
	

}
